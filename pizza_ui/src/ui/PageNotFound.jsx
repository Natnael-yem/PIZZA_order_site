import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBack}>Go Back</button>
        </div>
    )
}

export default PageNotFound