import { StyleSheet } from "react-native"
import colors from "../../../common/colors"
import fonts from "../../../common/font"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.textTitleContrast,
    fontSize: fonts.size.title,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  body: {
    flex: 4,
  },
  list: {
    width: '100%',
  },
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },
  itemText: {
    fontSize: fonts.size.text,
    fontWeight: '500',
  },
  footer: {
    flex: 1,
  }
})
