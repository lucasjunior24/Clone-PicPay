import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }) => bgColor};
    width: 100px;
    height: 200px;
`;
export const Title = styled.Text``;
export const Img = styled.Image``;