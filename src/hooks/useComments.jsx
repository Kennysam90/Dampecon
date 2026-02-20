import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getComments, createComment, deleteComment } from "../api/apiCall";
import axiosInstance from "../api/axiosInstance";

export const useComments = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  const addMutation = useMutation({
    mutationFn: createComment,
    // FIX: Use the object syntax for invalidateQueries
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await axiosInstance.put(`/comments/${id}/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    // FIX: Use the object syntax here too
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteComment,
    // FIX: Use the object syntax here too
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return {
    ...query,
    addComment: addMutation.mutate,
    updateComment: updateMutation.mutate,
    deleteComment: deleteMutation.mutate,
  };
};