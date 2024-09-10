import axiosInst from '../../Utils/axiosInstance'

const contact = async data => {
    const response = await axiosInst.post(`/contact`, data)
    return response.data
}

const ContactService = {
    contact
}

export default ContactService