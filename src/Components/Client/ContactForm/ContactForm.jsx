import { useFormik } from 'formik';
import * as yup from 'yup';
import ButtonCustom from '../../ButtonCustom/ButtonCustom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { resetContactState, sendContact } from '../../../Features/Contact/ContactSlice'

const ContactForm = () => {
    const dispatch = useDispatch()
    const {
        isSuccess,
        isError,
        isLoading,
        sentContact,
    } = useSelector(state => state.contact)

    useEffect(() => {
        if (isSuccess && sentContact) {
            toast.success('Gửi liên hệ thành công!')
            dispatch(resetContactState())
        }
        if (isError) {
            toast.error('Something Went Wrong!')
            dispatch(resetContactState())
        }
    }, [isSuccess, isError, isLoading, sentContact, dispatch])

    // Validation schema
    const validationSchema = yup.object().shape({
        name: yup.string().required('Họ tên không được để trống'),
        email: yup
            .string()
            .email('Email không hợp lệ')
            .required('Email không được để trống'),
        message: yup.string().required('Nội dung không được để trống'),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(sendContact(values))
            formik.resetForm()
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Họ tên"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

            />
            {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
            ) : null}

            {/* Email field */}
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
            ) : null}

            {/* Message field */}
            <textarea
                name="message"
                placeholder="Nội dung"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
            ) : null}

            <ButtonCustom title="Gửi ngay" htmlType="submit" loading={isLoading} />
        </form>
    );
};

export default ContactForm;
