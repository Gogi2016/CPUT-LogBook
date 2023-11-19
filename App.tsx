import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialHomeScreen from './screens/InitialHomeScreen';
import HomeScreen from './screens/HomeScreen';
import SupervisorHomeScreen from './screens/SupervisorHome';
import SupervisorCreateAccountScreen from './screens/SupervisorCreateAccountScreen';
import LoginSupervisorScreen from './screens/LoginSupervisor';
import RegistrationFormScreen from './screens/RegistrationFormScreen';
import LoginFormScreen from './screens/LoginFormScreen';
import CreateLogBookScreen from './screens/CreateLogBookScreen';
import CompleteLogBook from './screens/CompleteLogBook'; // Import the new screen
import Company_Details from './screens/MonthSheetScreen1';
import MonthSheetScreen2 from './screens/MonthSheetScreen2';
import MonthSheetScreen3 from './screens/MonthSheetScreen3';
import MonthSheetScreen4 from './screens/MonthSheetScreen4';
import MonthSheetScreen5 from './screens/MonthSheetScreen5';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerificationScreen from './screens/VerificationScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import LogBookDownloadScreen from './screens/LogBookDownloadScreen';
import StudentKeyScreen from './screens/StudentKey';
import ViewLogBookScreen from './screens/ViewLogBook';
import RateScreen from './screens/RateScreen';
import CommentsFromtheSupScreen from './screens/CommentsFromtheSup';
import SupvSignScreen from './screens/SupvSign';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialHome">
      <Stack.Screen name="InitialHome" component={InitialHomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="SupervisorHome" component={SupervisorHomeScreen} options={{ title: 'Supervisor Home' }} />
        <Stack.Screen name="SupervisorCreateAccount" component={SupervisorCreateAccountScreen}
          options={{ title: 'Create Supervisor Account' }}
        />
        <Stack.Screen name= "StudentKey" component={StudentKeyScreen} options={{ title: 'Enter student unique key'}}/>
        <Stack.Screen name="LoginSupervisor" component={LoginSupervisorScreen} options={{ title: 'Supervisor Login' }} />
        <Stack.Screen name="RegistrationForm" component={RegistrationFormScreen} options={{ title: 'Registration Form' }} />
        <Stack.Screen name="LoginForm" component={LoginFormScreen} options={{ title: 'Login Form' }} />
        <Stack.Screen name="CreateLogBook" component={CreateLogBookScreen} options={{ title: 'Create LogBook' }} />
        <Stack.Screen name="CompleteLogBook" component={CompleteLogBook} options={{ title: 'Month Sheet' }} /> 
        <Stack.Screen name="MonthSheetScreen1" component={Company_Details} />
        <Stack.Screen name="MonthSheetScreen2" component={MonthSheetScreen2} />
      <Stack.Screen name="MonthSheetScreen3" component={MonthSheetScreen3} />
      <Stack.Screen name="MonthSheetScreen4" component={MonthSheetScreen4} />
      <Stack.Screen name="MonthSheetScreen5" component={MonthSheetScreen5} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen}/>
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen}/>
      <Stack.Screen name="LogBookDownloadScreen" component={LogBookDownloadScreen} options={{ title: 'View LogBook'}}/>
      <Stack.Screen name= "ViewLogBook" component= {ViewLogBookScreen} options={{ title: 'View LogBook'}}/>
      <Stack.Screen name="RateScreen" component={RateScreen} options={{ title: 'Rate Student Work'}}/>
      <Stack.Screen name="CommentsFromtheSupScreen" component={CommentsFromtheSupScreen} options={{ title: 'Supervisor Comments'}}/>
      <Stack.Screen name="SupvSignScreen" component={SupvSignScreen}/>

        {/* Add more screens and navigation options here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




