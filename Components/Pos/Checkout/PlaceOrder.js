import Btn from '../../../Elements/Buttons/Btn'
import { useTranslation } from 'next-i18next';

const PlaceOrder = ({ values }) => {
    const { t } = useTranslation("common");
    const handleClick = () => {
        delete values['isPoint']
        delete values['isTimeSlot']
        delete values['isWallet']
        // Put Your Logic Here
    }
    return (
        <Btn className="btn btn-theme payment-btn mt-4" onClick={handleClick} disabled={values['consumer_id'] && values['billing_address_id'] && values['shipping_address_id'] && values['payment_method'] && values['delivery_description'] ? false : true}>
            {t("PlaceOrder")}
        </Btn>
    )
}

export default PlaceOrder