/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from "react"
import React from "react"
import { useColorScheme } from "react-native"

import { Provider } from "react-redux"

import { Colors } from "react-native/Libraries/NewAppScreen"

import { ToDo } from "../features/todos/views"
import { store } from "./store"

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark'
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   )
// }

function Index(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <Provider store={ store }>
      <ToDo />
    </Provider>
  )
}

export default Index
