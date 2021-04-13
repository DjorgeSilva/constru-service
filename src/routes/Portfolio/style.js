import styled from "styled-components"
import banner from "../../assets/img/about-banner.jpg"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;

    .container{
        margin: 80px auto;
    }
`;

export const WrapBanner = styled.div`
    height: 50vh;
    position: relative;

    .parallax {
        background-image: url(${banner});
        min-height: 50vh; 
        background-attachment: fixed;
        background-position-y: -100px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .innertxt{
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        background: rgba(0, 0, 0, .7);

        display: flex;
        justify-content: center;
        align-items: center;

        .container{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            h5{
                width: fit-content;
                margin: 0 auto;
                font-size: clamp(1.8rem, 4vw,3rem);
                color: ${props => props.theme.secundary_color};
                padding: 10px 20px;
                border-radius: 50px;
                
                span{
                    color: ${props => props.theme.ternary_color};
                }
        }
        }
        

    }
`

export const ItemGrid = styled.div`
    cursor: pointer;
    width: 100%;
    height: inherit;
    margin-bottom: 15px;
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;

    }
    h3{
        width: 100%;
        height:fit-content;
        background: ${props => props.theme.ternary_color};
        text-align: center;
        padding: 10px 0;
        font-size: clamp(1rem, 2.5vw, 1.1rem);
        text-transform: uppercase;
        margin: 0;

    }
    p{
        background: #EBE9E9;
        padding: 10px;
    }

`

export const MoreInfo = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .9);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ openModal }) => (openModal ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    z-index: 1000;

    .icone{
        cursor: pointer;
        color: #fff;
        margin-bottom: 30px;
        font-size: 3rem;

        &:hover{
            color: ${props => props.theme.ternary_color};
        }

    }

    .more-info{
        width: 90%;
        height: 60%;
        border-radius: 10px;
        padding: 20px 10px;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (min-width: 650px){
            width: 45%;
            padding: 20px;
        }
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

`