import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Hr from "../components/UI/Hr";
import Select from "../components/UI/Select";
import { useStore } from "../Hooks/useStore";
import { useGet_Category, useGet_QuizData } from "../httpServices/httpServices";
import { InterfaceFormData } from "../utils/interface";

const difficultyCategories = [
  { id: 1, name: "easy" },
  { id: 2, name: "medium" },
  { id: 3, name: "hard" },
];
const typesOptions = [
  { id: 1, name: "boolean" },
  { id: 2, name: "multiple" },
];

const QuizSettings = () => {
  const { triviaCategories, setTriviaCategories, setTriviaQuizDTO, setScore } = useStore();
  const { trivia_categories } = triviaCategories;
  const [categoryValue, setSetCategoryValue] = useState<number>(0);
  const [difficultyValue, setDifficultyValue] = useState<number>(0);
  const [typesValue, setTypesValue] = useState<number>(2);
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<InterfaceFormData>({
    amount: 10,
    category: 0,
    difficulty: "",
    type: "multiple",
  });

  const { isLoading: isLoadingCategories } = useGet_Category({
    onSuccess(data) {
      setTriviaCategories?.(data);
    },
    onError(err) {},
  });

  const { isLoading: isLoadingQuizData, refetch: submitData } = useGet_QuizData(formData, {
    enabled: false,
    onSuccess(data) {
      setTriviaQuizDTO?.(data);
      navigate("quiz");
    },
    onError(err) {},
  });

  const handleCategories = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      category: parseInt(e.target.value),
    });
    setSetCategoryValue(parseInt(e.target.value));
  };
  const handleDifficulties = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedData = difficultyCategories.find((a) => a.id === parseInt(e.target.value));
    selectedData &&
      setFormData({
        ...formData,
        difficulty: selectedData?.name,
      });
    setDifficultyValue(parseInt(e.target.value));
  };
  const handleTypes = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedData = typesOptions.find((a) => a.id === parseInt(e.target.value));
    selectedData &&
      setFormData({
        ...formData,
        type: selectedData?.name,
      });
    setTypesValue(parseInt(e.target.value));
  };

  useEffect(() => {
    setScore?.(0);
  },[]);

  useEffect(() => {
    if(formData.category > 0 && formData.difficulty.length){
      setIsValid(true);
    }
   
  },[formData]);

  const handleSubmit = () => {
    submitData();
  };

  return (
   <motion.div initial={{ x: -10, opacity: 0 }} animate={{x: 0, opacity: 1 }}  className="w-full flex flex-col">
 
    <form className="bg-secondary px-4 py-5 flex flex-col gap-4 max-w-md w-[320px] md:w-1/2 mx-auto rounded-md shadow-md ">
    <h1 className="text-3xl md:text-4xl  lg:text-5xl text-white font-semibold text-center my-2 md:my-5">Quiz Game</h1>
    <Hr />
      <div className="col-span-6 sm:col-span-3">
        <Select
          name={"category"}
          labelText={"Quiz category's:"}
          value={categoryValue}
          setSetValue={setSetCategoryValue}
          options={trivia_categories}
          onChange={handleCategories}
          placeholder={"--select category--"}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <Select
          name={"difficulty"}
          labelText={"Difficulty:"}
          value={difficultyValue}
          setSetValue={setDifficultyValue}
          options={difficultyCategories}
          onChange={handleDifficulties}
          placeholder={"--select difficulty--"}
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <Select
          name={"type"}
          labelText={"Type:"}
          value={typesValue}
          setSetValue={setTypesValue}
          options={typesOptions}
          onChange={handleTypes}
          placeholder={"--select types--"}
          disabled
        />
      </div>
      <Hr />
      <Button buttonText={"Submit"} disabled={!isValid} onClick={handleSubmit} isLoading={isLoadingQuizData} />
    </form>
   </motion.div>
  );
};

export default QuizSettings;
