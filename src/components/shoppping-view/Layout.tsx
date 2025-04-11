import { Outlet } from "react-router-dom";
import ShoppingViewHeader from "./Header";

const ShoppingViewLayout = () => {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header for shopping view */}
            <ShoppingViewHeader/>
            <main className="flex flex-col w-full">
                <Outlet/>
            </main>
            
        </div>
    );
};

export default ShoppingViewLayout