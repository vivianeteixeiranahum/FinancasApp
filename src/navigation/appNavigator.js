import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "../screen/Login/LoginScreen";
import Home from "../screen/Home/HomeScreen";
import Register from "../screen/Register/RegisterScreen";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeIcon = ({ focused, color, size }) => (
    <Ionicons name="home" size={size} color={color} />
);

const LoginIcon = ({ focused, color, size }) => (
    <Ionicons name="log-in" size={size} color={color} />
);

const RegisterIcon = ({ focused, color, size }) => (
    <Ionicons name="add-circle-sharp" size={size} color={color} />
);

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainHome" >
                    {() => (
                        <Drawer.Navigator
                            screenOptions={{
                                drawerStyle: {
                                    backgroundColor: "#FFFF",
                                    width: 230,
                                }
                            }}
                        >
                        <Drawer.Screen 
                                name='Login'
                                component={LoginScreen}
                                options={{ drawerIcon: LoginIcon }}
                            />
                            <Drawer.Screen 
                                name='Home'
                                component={Home}
                                options={{ drawerIcon: HomeIcon }}
                            />
                            
                            <Drawer.Screen 
                                name='Register'
                                component={Register}
                                options={{ drawerIcon: RegisterIcon }}
                            />
                        </Drawer.Navigator>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}