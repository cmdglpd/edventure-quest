import {
    Typography,
    TextField,
    Divider,
    Box,
    Button,
    Select,
    MenuItem,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import uppinionLogo from "../../assets/uppinion.png";
import colors from "../../utils/colors";
import { auth, db } from "../../config/firebase";
import { validationRules } from "../../utils/validationRules";
// import defaultUserImage from "../../assets/default-images/default_user_image.jpg";
import { useGuilds } from "../../hooks/useGuilds";

export default function AccountInformationPage({ }) {
    const { grandCouncilId, guildId } = useParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const { guilds, error: guildError, loading: guildLoading } = useGuilds(grandCouncilId)
    const [guildOptions, setGuildOptions] = useState([])

    useEffect(() => {
        if (guilds.length > 0) {
            guilds.map(guild => {
                setGuildOptions((prevGuild) => [...prevGuild, guild.name])
            })
        }
    }, [guilds])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            guild: ""
        },
    });

    const signUp = (data) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                // Signed up
                // //Creates an image url for the default user image profile
                // let defaultImage = {
                //   name: Math.floor(Math.random() * 10000000).toString(),
                //   blob: null,
                // };

                // await fetch(defaultUserImage)
                //   .then((response) => response.blob())
                //   .then((myBlob) => {
                //     defaultImage.blob = myBlob;
                //   });

                // //Upload profile image to firebase storage
                // const storage = getStorage();
                // const storageRef = ref(storage, defaultImage.name);
                // var profileImageURL = ""

                // await uploadBytes(storageRef, defaultImage.blob).then((snapshot) => {
                //   console.log(snapshot);
                // });

                // //Generates image url
                // await getDownloadURL(
                //   ref(storage, `gs://edventure-quest.appspot.com/${defaultImage.name}`)
                // )
                //   .then((url) => {
                //     profileImageURL = url
                //   })

                await updateProfile(auth.currentUser, {
                    displayName: data.name,
                });

                // Saves user info in the "users" collection
                await addDoc(collection(db, "users"), {
                    username: data.username,
                    email: data.email,
                    referenceNumber: data.referenceNumber,
                    role: "guild member",
                    profileImage: "",
                    authId: auth.currentUser.uid,
                    guildId: guildId,
                    completedQuests: [],
                    posts: [],
                    purchasedItems: [],
                });

                setSuccess(true);
                setLoading(false);
                navigate("/login");
            })
            .catch((error) => {
                setSuccess(false);
                setError(error.message);
                setLoading(false);
            });
    };

    if (guildLoading) {
        return <p>Fetching guilds</p>
    }

    return (
        <>
            {/* <img
          src={uppinionLogo}
          alt="uppinion_logo"
          style={{ width: "100px", height: "100px" }}
        /> */}
            <Typography
                color={"black"}
                variant="h5"
                noWrap
                sx={{ fontWeight: "bold" }}
            >
                UP<span style={{ color: colors.primary }}>PINION</span>
            </Typography>
            <Typography variant="subtitle2" noWrap sx={{ fontStyle: "italic" }}>
                "Make Every Event a Community Masterpiece"
            </Typography>
            <Divider sx={{ width: "100%", mt: "2rem" }}></Divider>
            <Typography
                color={"black"}
                variant="h6"
                noWrap
                sx={{ fontWeight: "bold", color: colors.primary }}
            >
                REGISTER
            </Typography>

            {error && (
                <Typography
                    color={"black"}
                    variant="body2"
                    noWrap
                    sx={{ color: colors.error, mb: "1rem" }}
                >
                    {error}
                </Typography>
            )}

            <form onSubmit={handleSubmit(signUp)} style={{ width: "100%" }}>
                <div style={{ width: "100%" }}>
                    <Typography variant="body1">Username</Typography>
                    <TextField
                        size="small"
                        fullWidth
                        name="username"
                        {...register("username", validationRules.username)}
                    ></TextField>
                    <Typography variant="caption" sx={{ color: "red" }}>
                        {errors.username?.message}
                    </Typography>
                </div>

                <div style={{ width: "100%", paddingTop: "1rem" }}>
                    <Typography variant="body1">Student No.</Typography>
                    <TextField
                        size="small"
                        fullWidth
                        name="referenceNumber"
                        {...register("referenceNumber", validationRules.username)}
                    ></TextField>
                    <Typography variant="caption" sx={{ color: "red" }}>
                        {errors.username?.message}
                    </Typography>
                </div>

                <div style={{ width: "100%", paddingTop: "1rem" }}>
                    <Typography variant="body1">Email</Typography>
                    <TextField
                        size="small"
                        fullWidth
                        type="email"
                        name="email"
                        {...register("email", validationRules.email)}
                    ></TextField>
                    <Typography variant="caption" sx={{ color: "red" }}>
                        {errors.email?.message}
                    </Typography>
                </div>

                <div style={{ width: "100%", paddingTop: "1rem" }}>
                    <Typography variant="body1">Password</Typography>
                    <TextField
                        size="small"
                        fullWidth
                        type="password"
                        name="password"
                        {...register("password", validationRules.password)}
                    ></TextField>
                    <Typography variant="caption" sx={{ color: "red" }}>
                        {errors.password?.message}
                    </Typography>
                </div>

                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    color="brown"
                    sx={{ my: "0.75rem" }}
                    disabled={loading}
                >
                    {loading ? "LOADING" : "REGISTER"}
                </Button>
            </form>
            <Typography variant="subtitle2">
                Already have an account?{" "}
                <a
                    href="/login"
                    style={{
                        fontWeight: "bold",
                        color: colors.primary,
                        textDecoration: "underline",
                    }}
                >
                    SIGN IN HERE
                </a>
            </Typography>
        </>
    );
}
