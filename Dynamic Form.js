import React, { useContext, useState } from "react";
import {View, Platform } from "react-native";
import styled from "styled-components";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Text from "../components/Text";
import Extras from "../components/addDir";

export default SignUpScreen = ({ navigation }) => {
    const [dirname, setName] = useState();
    const [dirshare, setShare] = useState();
    const [diremail, setEmail] = useState();
    const [diraddress, setAddress] = useState();
    const [loading, setLoading] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState();
    const [formValues, setFormValues] = useState([dirname: '', diremail: '', dirshare: '', diraddress: '']);
     const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);

    const getPermission = async () => {
        if (Platform.OS !== "web") {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            return status;
        }
    };

      
   changeField = () => {
      setFormValues([...formValues, HalfAuthField ]);
       alert(typeof(HalfAuthField));
      };
   
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });
            if (!result.cancelled) {
                setProfilePhoto(result.uri);
            }
        } catch (error) {
            console.log("Error @pickImage: ", error);
        }
    };

    const addProfilePhoto = async () => {
        const status = await getPermission();

        if (status !== "granted") {
            alert("We need permission to access your camera roll.");

            return;
        }

        pickImage();
    };

    const signUp = async () => {
        setLoading(true);

        const user = { dirname, diremail, diraddress, dirshare, profilePhoto };

        try {
            const createdUser = await firebase.createUser(user);

            setUser({ ...createdUser, isLoggedIn: true });
        } catch (error) {
            console.log("Error @signUp: ", error);
        } finally {
            setLoading(false);
        }
    };

     
    return (
        <Container>
            <Main>
                <Text title semi center>
                    Company Details.
                </Text>
                <SubTitle >
                Please fill in Director Details
                </SubTitle>
            </Main>

            <Auth>
                  <AuthContainer>
                    <AuthHold style={{justifyContent: 'flex-start',}}>
                    <AuthTitle>Full Name</AuthTitle>
                    <HalfAuthField
                        style={{"margin-right": "7px"}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(username) => setName(dirname.trim())}
                        value={dirname}
                    />
                    </AuthHold>
                    <AuthHold style={{justifyContent: 'flex-end',}}>
                    <AuthTitle>Email</AuthTitle>
                    <HalfAuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={(email) => setEmail(diremail.trim())}
                        value={diremail}
                    />
                    </AuthHold>
                </AuthContainer>

                    <AuthContainer>
                    <AuthHold style={{justifyContent: 'flex-start',}}>
                    <AuthTitle>Share Ratio</AuthTitle>
                    <HalfAuthField
                        style={{"margin-right": "7px"}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(dirshare) => setShare(dirshare.trim())}
                        value={dirshare}
                    />
                    </AuthHold>
                    <AuthHold style={{justifyContent: 'flex-end',}}>
                    <AuthTitle>Address</AuthTitle>
                    <HalfAuthField
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(diraddress) => setAddress(diraddress.trim())}
                        value={diraddress}
                    />
                    </AuthHold>
                </AuthContainer>
               
                    { formValues.map((formValue) => {
                       return ( 
                       <AuthContainer>
                    <AuthHold style={{justifyContent: 'flex-start',}}>
                    <AuthTitle>Full Name</AuthTitle>
                    <HalfAuthField
                        style={{"margin-right": "7px"}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(username) => setName(dirname.trim())}
                        value={dirname}
                    />
                    </AuthHold>
                    <AuthHold style={{justifyContent: 'flex-end',}}>
                    <AuthTitle>Email</AuthTitle>
                    <HalfAuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={(email) => setEmail(diremail.trim())}
                        value={diremail}
                    />
                    </AuthHold>
                </AuthContainer>

                    <AuthContainer>
                    <AuthHold style={{justifyContent: 'flex-start',}}>
                    <AuthTitle>Share Ratio</AuthTitle>
                    <HalfAuthField
                        style={{"margin-right": "7px"}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(dirshare) => setShare(dirshare.trim())}
                        value={dirshare}
                    />
                    </AuthHold>
                    <AuthHold style={{justifyContent: 'flex-end',}}>
                    <AuthTitle>Address</AuthTitle>
                    <HalfAuthField
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={(diraddress) => setAddress(diraddress.trim())}
                        value={diraddress}
                    />
                    </AuthHold>
                </AuthContainer>
                         ) 
                         })
                        }
              
              
                <AuthContainers>
                <Mini>
                <AddMore onPress={() =>{ changeField() }}>
                <Ionicons name="add" size={32} color="blue" style={{alignSelf: "center"}} />
                 <Caption style={{color: "#8022d9"}}>Add New Director</Caption>
                </AddMore>
                </Mini>
                <Mini>
                 <Delete onPress={() =>{ this.deleteDynamicField(key) }}>
                <Ionicons name="close" size={32} color="red" style={{alignSelf: "center"}} />
                 <Caption style={{color: "blue"}} >Delete Director</Caption>
                </Delete>
                  </Mini>
                </AuthContainers>
            </Auth>
          <UploadHold>
            <ProfilePhotoContainer onPress={addProfilePhoto}>
                {profilePhoto ? (
                    <ProfilePhoto source={{ uri: profilePhoto }} />
                ) : (
                    <DefaultProfilePhoto>
                        
                        <AntDesign name="upload" size={24} color="#ffffff" />
                    </DefaultProfilePhoto>
                ) }
              
            </ProfilePhotoContainer>
             <Caption>UPLOAD SNAPHOTS OF DIRECTORS FILES</Caption>
           </ UploadHold>

            <SignUpContainer onPress={signUp} disabled={loading}>
                {loading ? (
                    <Loading />
                ) : (
                    <Text bold center color="#ffffff">
                        Sign Up
                    </Text>
                )}
            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate("SignIn")}>
                <Text small center>
                    Already have an account?{" "}
                    <Text bold color="#8022d9">
                        Sign In
                    </Text>
                </Text>
            </SignIn>

            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
            <StatusBar barStyle="light-content" />
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 160px;
    justify-content: center;
    margin-bottom: 20px;
`;

const UploadHold = styled.View`
    flex: 1;
    justify-content: center;
`;

const SubTitle = styled.Text`
    size: 1.8 rem;
    align-self: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const Caption = styled.Text`
    margin-top: 4px;
    size: 1.8 px;
    align-self: center;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    overflow: hidden;
`;

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const AddMore = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
`;

const Delete = styled.TouchableOpacity`
    align-self: center;
    justify-content: center;
`;

const ProfilePhoto = styled.Image`
    flex: 1;
`;

const Auth = styled.View`
    flex: 1;
    margin: 30px 20px 12px;
    
`;

const AuthBase = styled.View`
    flex: 1;
    justify-content: center;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
    flex-direction: row;
`;

const AuthContainers = styled.View`
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: center;
    align-self: center;
`;

const Mini = styled.View`
    width: 40%;
    justify-content: center;
    align-self: center;
`;

const HalfAuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
    width: 150px;
`;

const AuthHold = styled.View`
    margin-bottom: 1px;
    margin-right: 5px;
`;

const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;

`;



const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
}))``;

const SignIn = styled.TouchableOpacity`
    margin-top: 16px;
`;

const HeaderGraphic = styled.View`
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

const RightCircle = styled.View`
    background-color: #8022d9;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

const LeftCircle = styled.View`
    background-color: blue;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

const StatusBar = styled.StatusBar``;
