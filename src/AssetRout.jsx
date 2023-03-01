import { Routes ,Route} from "react-router-dom"
import AddEditCategory from "./pages/pages/category/AddEditCategory"
export function AssetRout(){
    return (
        <Routes>
             <Route path="addcategory" element={<AddEditCategory />}/>
        </Routes>
    )
}