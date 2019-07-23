import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Animate.css';

function success() {
    const MySwal = withReactContent(Swal);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'linear-gradient(to left, rgba(67, 172, 67, 0.7), #43ac43)'
    });
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
            MySwal.clickConfirm()
        }
    }).then(() => {
        return Toast.fire({
            type: 'success',
            title: 'SweetAlert2 is imported successfully'
        })
    });
}

function error() {
    const MySwal = withReactContent(Swal);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'linear-gradient(to left, rgba(252, 68, 69, 0.7), #fc4445)'
    });
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
            MySwal.clickConfirm()
        }
    }).then(() => {
        return Toast.fire({
            type: 'error',
            title: 'SweetAlert2 couldn\'t be imported'
        })
    });
}

function warning() {
    const MySwal = withReactContent(Swal);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'linear-gradient(to left, rgba(95, 151, 250, 0.7), #5f97fa)'
    });
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
            MySwal.clickConfirm()
        }
    }).then(() => {
        return Toast.fire({
            type: 'warning',
            title: 'Warning for something'
        })
    });
}

function info() {
    const MySwal = withReactContent(Swal);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'linear-gradient(to left, rgba(95, 151, 250, 0.7), #5f97fa)'
    });
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
            MySwal.clickConfirm()
        }
    }).then(() => {
        return Toast.fire({
            type: 'info',
            title: 'Information about something'
        })
    });

}

function question() {
    const MySwal = withReactContent(Swal);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'linear-gradient(to left, rgba(95, 151, 250, 0.7), #5f97fa)'
    });
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
            MySwal.clickConfirm()
        }
    }).then(() => {
        return Toast.fire({
            type: 'question',
            title: 'Question about something'
        })
    });
}

export { success, error, warning, info, question };