import Negative from "../assets/icone_erro.png"
import Almost from "../assets/icone_quase.png"
import Success from "../assets/icone_certo.png"

const icons = {
    danger:{
        src: Negative,
        name: "danger",
        dataTest: "no-icon"
    },
    warning:{
        src: Almost,
        name: "warning",
        dataTest: "partial-icon"
    },
    success:{
        src: Success,
        name: "success",
        dataTest: "zap-icon"
    }
}

export default icons