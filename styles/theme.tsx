import { StyleSheet } from "react-native";
import { Text, TextProps } from "react-native";
import { useFonts } from 'expo-font';

export function useAppFonts() {
  return useFonts({
    'PublicSans-Regular':  require('@/assets/fonts/PublicSans/PublicSans-Regular.ttf'),
    'PublicSans-SemiBold': require('@/assets/fonts/PublicSans/PublicSans-SemiBold.ttf'),
    'PublicSans-Bold':     require('@/assets/fonts/PublicSans/PublicSans-Bold.ttf'),
  });
}

export const fonts = {
  regular:  'PublicSans-Regular',
  semiBold: 'PublicSans-SemiBold',
  bold:     'PublicSans-Bold',
};

export const colors = {
    primary: '#258834',
    primaryDark: '#194A23',
    black: '#3A3036',
    blackLight: '#41424A',
    blackDark: '#241f22',
    white: '#FFFFFF',
    grey: "#EDEDEB"
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

export const typography = StyleSheet.create({
    h1: {
        fontSize: 28,
        lineHeight: 28 * 1.4,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    h2: {
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0.35,
        fontFamily: fonts.bold,
        color: colors.black,
    },
    h3: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '700',
        fontFamily: fonts.bold,
        color: colors.black,
    },
    body:{
        fontSize: 17,
        fontWeight: '400',
        fontFamily: fonts.regular,
        color: colors.black,
    },
});

type Props = TextProps & {
  children: React.ReactNode;
};

export const Heading1 = ({ children, style, ...props }: Props) => (
  <Text style={[typography.h1, style]} {...props}>
    {children}
  </Text>
);

export const Heading2 = ({ children, style, ...props }: Props) => (
  <Text style={[typography.h2, style]} {...props}>
    {children}
  </Text>
);

export const Heading3 = ({ children, style, ...props }: Props) => (
  <Text style={[typography.h3, style]} {...props}>
    {children}
  </Text>
);

export const BodyText = ({ children, style, ...props }: Props) => (
  <Text style={[typography.body, style]} {...props}>
    {children}
  </Text>
);

export const AppText = ({ children, style, ...props }: Props) => (
  <Text style={[{ fontFamily: fonts.regular }, style]} {...props}>
    {children}
  </Text>
);