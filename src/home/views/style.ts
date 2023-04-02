import { StyleSheet } from "react-native"
import colors from "../../common/colors"
import fonts from "../../common/font"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  header: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  counter: {
    color: colors.textBackground,
    fontSize: fonts.size.title,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  body: {
    flex: 1,
  },
  wrapperButton: {
    alignSelf: 'center',
    width: '70%',
    marginVertical: 12,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  contentButton: {
    color: colors.textSurface,
    textAlign: 'center',
    fontSize: fonts.size.button,
    fontWeight: '600',
    paddingVertical: 12,
  },
  footer: {
    flex: 1,
  }
})
