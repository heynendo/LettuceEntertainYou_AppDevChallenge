import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse'
  },
  tabs: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: 0,
    paddingHorizontal: spacing.md,
  },
  tab: {
    paddingBottom: 0,
  },
  tabText: {
    fontSize: 15,
    color: colors.primaryDark,
    paddingHorizontal: spacing.xs
  },
  tabTextActive: {
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  tabUnderline: {
    height: 4,
    backgroundColor: colors.primary,
    marginTop: 4,
  },
  line: {
    width: "100%",
    borderColor: colors.grey,
    borderWidth: 0.5,
    marginTop: -1,
  }
});