function createAccount(){
    window.location.href = '/createNewAccount';
}

function cancelAdd() {
    window.location.href = '/loginRegisterView';
}

function cancelEditProduct(user) {
    window.location.href = '/admin/'+user+'/products';
}

function cancelEditClient(user) {
    window.location.href = '/admin/'+user+'/clients';
}

function cancelUpdateInfo(user) {
    window.location.href = '/login/customer/'+user;
}
//----------------------------------------------------------------------------------------------------

function addToBag(productID,productQuantity) {
    window.location.href = '/addToBag/'+productID+'/'+productQuantity;
}
