import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "./theme";

export const styles = StyleSheet.create({
  heading: {
    backgroundColor: colors.white,
    height: 44
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container2:{
    padding: spacing.md
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginBottom: spacing.md,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    marginBottom: spacing.sm,
  },
  tagline: {
    fontSize: 15,
    fontStyle: 'italic',
    color: colors.blackLight,
    marginBottom: spacing.sm,
  },
  date: {
    fontSize: 13,
    color: colors.blackLight,
    marginBottom: spacing.md,
  },
});