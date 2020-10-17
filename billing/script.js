/**
 * Created by root on 17/10/20.
 */
function billingFunction(f) {
    if(f.same.checked == true) {
        f.billingName.value = f.shippingName.value;
        f.billingZip.value = f.shippingZip.value;
        f.billingAddress.value = f.shippingAddress.value;
        f.billingState.value = f.shippingState.value;
        f.billingCity.value = f.shippingCity.value;
        f.billingEmail.value = f.shippingEmail.value;
        f.billingPhone.value = f.shippingPhone.value;
    }
}
