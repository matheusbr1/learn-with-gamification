import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    height: 100vh;
    max-height: 1000px;

    div.userDetails {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        /* border: solid 2px; */
        width: 768px;

        img {
            max-width: 200px;
            width : 18%
        }

        div {
            width : 60%;
            padding: 20px 50px;
            border-radius:10px;
            
            background: #C4C4C4;

            p {
                font-size: 30px;
            }   

            > span {
                margin-right: 5%;
            }

            span {
                display: inline-block;
                margin-top: 10px;
                font-size: 20px;
            }
        }
    }

    div.challenges {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        height: 480px;

        /* border: solid 2px; */

        h1 {
            font-size: 35px;
            text-align: center;
        }   

        div.challengeBox {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 3% 1%;

            width: 768px;
            height: 350px;

            padding: 2%;

            div {
                /* border: solid 2px; */
                padding:2%;

                background: #7DE829;
                opacity: 0.7;

                border-radius: 10px;

                position: relative;

                span.close {
                    position: absolute;
                    top: 5px;
                    right: 10px;
                }

                span.status {
                    position: absolute;
                    bottom: 5px;
                    right: 10px;
                }

                span.creation {
                    position: absolute;
                    bottom: 5px;
                    left: 10px;
                }

                p.title {
                    font-size: 25px;
                }

                p.description {
                    font-size: 15px;
                    margin: 10px 0px;

                    max-height: 50px;

                    overflow:auto;
                }
            }

        }

        div.bullets {
            display: flex;
        }
    }

    @media screen and (max-width:768px) {
        
        height: unset;
        max-height: unset;
        padding: 4% 0;
        overflow-y: auto;

        div.userDetails {

            flex-direction: column;
            width: 100%;

            img {
                width : 30%
            }
            div {
                text-align: center;
                width : 95%;
                
                p, span{
                    font-size: 5vw;
                } 
            }
        }

        
        div.challenges {

            height: unset;

            h1 {
                font-size: 7vw;
                margin-top: 4%;
                text-align: center;
            }  

            div.challengeBox {
                display: flex;
                flex-direction: column;
                
                width: 100%;
                height: unset;

                div {
                    margin-top: 2%;
                    min-height: 140px;
                }

                div:nth-child(1) {
                    margin-top: 0%;
                }
            }
        }
    }

`