import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

export const useFormData = ({ customFormData, formKey = "xannqewb" }) => {
  const [state, handleSubmit] = useForm(formKey);
  const [areInputsFilled, setInputsFilled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ ...customFormData });

  useEffect(() => {
    const formEntries = Object.values(formData);
    formEntries.find((entry) => entry === "") === undefined
      ? setInputsFilled(true)
      : setInputsFilled(false);
  }, [formData]);

  const setFormToDefault = () => {
    const formKeys = Object.keys(formData);
    formKeys.forEach((key) => setFormData((prev) => ({ ...prev, [key]: "" })));
  };

  const handleFormDataChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!areInputsFilled) return;

    try {
      setLoading(true);
      await handleSubmit(e);
      setFormToDefault();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    console.log(formData);
  };

  return {
    state,
    handleFormDataChange,
    handleFormSubmit,
    isLoading,
    formData,
    areInputsFilled,
  };
};
