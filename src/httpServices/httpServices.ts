import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { apiFetchCategory, apiFetchQuiz } from "../api/endpoints";
import { InterfaceFormData, InterfaceQuiz, TriviaCategoriesDTO } from "../utils/interface";

interface InterfaceQuizGameHttpService<A,B> {
  getCategory: () => Promise<A>;
  getQuiz: (data:InterfaceFormData) => Promise<B>;
}

const QuizGameHttpService: InterfaceQuizGameHttpService<TriviaCategoriesDTO,InterfaceQuiz> = {
  getCategory: async () : Promise<TriviaCategoriesDTO> => {
    const response = await axios({
      url: `${apiFetchCategory}`,
      method: "GET",
    });
    return response.data;
  },
  getQuiz: async (data:InterfaceFormData): Promise<InterfaceQuiz> => {
    const response = await axios({
      url: `${apiFetchQuiz}`,
      method: "GET",
      params: data
    });
    return response.data;
  },
};

export const useGet_Category = (options: Omit<UseQueryOptions<TriviaCategoriesDTO>, "queryKey" | "queryFn"> = {}) => {
  return useQuery<TriviaCategoriesDTO>(["getCategory"], QuizGameHttpService.getCategory, {
    ...options,
  });
};
export const useGet_QuizData = (formData:InterfaceFormData,options: Omit<UseQueryOptions<InterfaceQuiz>, "queryKey" | "queryFn"> = {}) => {
  return useQuery<InterfaceQuiz>(["getQuiz"], () => QuizGameHttpService.getQuiz(formData), {
    ...options,
  });
};
