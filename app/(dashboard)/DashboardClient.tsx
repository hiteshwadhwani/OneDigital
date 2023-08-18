import ClientOnly from "@/provider/ClientOnly"
import Navbar from "./components/navbar/Navbar"

const DashboardClient = () => {
    return (
        <ClientOnly>
            <Navbar />
        </ClientOnly>
    )
}
export default DashboardClient