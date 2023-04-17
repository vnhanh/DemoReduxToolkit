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
  itemWrapper: {
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
  itemInner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemContent: {
    flex: 1,
    justifyContent: "center",
  },
  itemText: {
    fontSize: fonts.size.text,
    fontWeight: '500',
  },
  itemCheckBox: {
    
  },
  floatingBtn: {
    position: 'absolute',
    width: 64,
    height: 64,
    bottom: 36,
    right: 36,
    backgroundColor: colors.primary,
    borderRadius: 64,
    justifyContent: 'center',
  },
  floatingBtnText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fonts.size.buttonSuperBig
  },
  footer: {
    flex: 1,
  }
})
