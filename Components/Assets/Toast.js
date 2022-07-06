import Swal from "sweetalert2"

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    width: "auto",
    timerProgressBar: false,
    background: '#fff',
    customClass: {
        htmlContainer: 'swal_modal_container',
        popup: "modal_popup",
        content: 'modal_content modal_content_error_bet',
        icon: 'modal_icon',
    },
    showClass: {
        popup: 'animate__animated animate__fadeInRight'
    },
    hideClass: {
        popup: 'modal_popup animate__animated animate__fadeOutRight'
    },
})
export const ToastBig = Swal.mixin({
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    width: "auto",
    timerProgressBar: false,
    background: '#fff',
    customClass: {
        htmlContainer: 'swal_modal_container',
        popup: "modal_popup",
        content: 'modal_content modal_content_error_bet',
        icon: 'modal_icon',
    },
})
