import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { todosUpdate } from 'store/reducers/global';
import { addNewTodo } from 'utils/helpers';
import { AppContext } from 'providers';
import { Formik } from 'formik';
import * as Yup from 'yup';
import getStyle from './style';

export default function Create() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { theme } = useContext(AppContext);
    const [style, setStyle] = useState(getStyle(theme));
    const todos = useSelector(state => state?.global?.todos || []);

    useEffect(() => {
        setStyle(getStyle(theme));
    }, [theme]);

    const initialValues = {
        title: null,
        description: null,
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().nullable().required('Title is required'),
        description: Yup.string().nullable().required('Description is required'),
    });

    const onSubmit = async (values, actions) => {
        dispatch(todosUpdate(addNewTodo(todos, values)));
        actions.resetForm();
        navigation.goBack();
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={style.container}
            bounces={false}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize>
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                    <View style={style.formContainer}>
                        <View style={style.titleWrap}>
                            <TextInput
                                style={style.title}
                                value={values.title}
                                testID={'TitleInput'}
                                placeholder={'Enter the title'}
                                onChangeText={handleChange('title')}
                                placeholderTextColor={theme.GREY}
                            />
                            {touched.title && errors.title && (
                                <Text style={style.errorText}>{errors.title}</Text>
                            )}
                        </View>
                        <View style={style.descriptionWrap}>
                            <TextInput
                                style={style.description}
                                value={values.description}
                                testID={'DescriptionInput'}
                                placeholder={'Enter the description'}
                                onChangeText={handleChange('description')}
                                placeholderTextColor={theme.GREY}
                                numberOfLines={10}
                                multiline={true}
                            />
                            {touched.description && errors.description && (
                                <Text style={style.errorText}>{errors.description}</Text>
                            )}
                        </View>
                        <TouchableOpacity testID={'SaveTodo'} style={style.saveButton} onPress={handleSubmit}>
                            <AntDesign name="save" size={25} color={theme.WHITE} />
                            <Text style={style.saveButtonText}>{'Save'}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </KeyboardAwareScrollView>
    );
}
