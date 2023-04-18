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
    flexDirection: 'row',
  },
  title: {
    color: colors.textTitleContrast,
    fontSize: fonts.size.title,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  deleteBtn: {
    height: '100%',
    position: 'absolute',
    top: 8,
    right: 16,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  loadingWrapper: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    marginTop: 16,
  },
  // wrap item and delete button
  line: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  lineDeleteBtn: {
    width: 36,
    height: '100%',
    justifyContent: 'center',
    marginRight: 16,
  },
  itemWrapper: {
    flex: 1,
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
  itemStrikeThrough: {
    width: '100%',
    height: 1,
    position: 'absolute',
    backgroundColor: colors.gray500,
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
  }
})
