import Navbar from "../Navbar/Navbar";
export default function HeaderComponent() {

    return (
        <div className="container mx-auto max-w-[1170px]">
            <div className="flex h-[130px] items-center justify-between">
                <div><img  alt="Verdurafrutis" /></div>
                <div><Navbar /></div>
            </div>
        </div>
    );
}
