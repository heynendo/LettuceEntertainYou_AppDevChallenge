import { StyleSheet } from "react-native";
import { spacing } from "./theme";

export const styles = StyleSheet.create({
  articleCard: {
    flexDirection: 'row',
    gap: spacing.md
  },
  cardLeft: {
    position: 'relative',
  },
  badgeWrapper: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
  },
  cardImg: {
    borderRadius: 4,
    height: 100,
    aspectRatio: 150 / 100
  },
  cardText: {
    flex: 1,
    gap: spacing.md
  },
  date: {
    fontSize: 13,
    color: '#888',
  },
});