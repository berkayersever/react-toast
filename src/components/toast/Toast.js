import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

MySwal.fire({
    title: <p>Hello World</p>,
    footer: 'Copyright 2018',
    onOpen: () => {
        MySwal.clickConfirm()
    }
}).then(() => {
    // return MySwal.fire(<p>SweetAlert2</p>)
    return Toast.fire({
        type: 'success',
        title: 'SweetAlert2 is imported successfully'
    })
});