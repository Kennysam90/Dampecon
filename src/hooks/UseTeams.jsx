import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTeam, createTeam, deleteTeam } from "../api/apiCall";
import axiosInstance from "../api/axiosInstance";

export const useTeam = () => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  const addMutation = useMutation({
    mutationFn: createTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await axiosInstance.put(`/team/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team"] });
    },
  });

  return {
    ...query,
    addTeam: addMutation.mutate,
    updateTeam: updateMutation.mutate,
    deleteTeam: deleteMutation.mutate,
  };
};