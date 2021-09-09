import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { View, Text } from 'react-native';
import styled from "styled-components";

import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";


 export default addDir = () => {
     const [dirname, setName] = useState();
    const [dirshare, setShare] = useState();
    const [diremail, setEmail] = useState();
    const [diraddress, setAddress] = useState();
    const [loading, setLoading] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState();
    const firebase = useContext(FirebaseContext);
    const [_, setUser] = useContext(UserContext);


  return (
   
     <Extras>
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
               
            </Extras>

  );
}


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

const ProfilePhoto = styled.Image`
    flex: 1;
`;

const Extras = styled.View`
    flex: 1;
    margin: 3px 5px 6px;
    
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
    flex-direction: row;
  
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

const HalfAuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
    width: 150px;
 
`;

const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`;
