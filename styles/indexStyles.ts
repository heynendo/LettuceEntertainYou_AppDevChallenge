import { StyleSheet } from "react-native";
import { spacing, colors } from '@/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 60
  },
  heading1: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md    
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  separator: {
    height: spacing.lg,
  },
});