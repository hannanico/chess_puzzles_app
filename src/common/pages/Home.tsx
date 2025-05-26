import MainLayout from "../layout/MainLayout";
import { Chessboard } from "react-chessboard"; 

export default function Home() {
    return (
         <MainLayout>
            <div>
               <Chessboard 
               id="BasicBoard" 
               boardWidth={700}
               customDarkSquareStyle={{ backgroundColor: '#7397AC' }}
               customLightSquareStyle={{backgroundColor:'#D9E5E9'}}
               />
            </div>
    </MainLayout>
    )
}