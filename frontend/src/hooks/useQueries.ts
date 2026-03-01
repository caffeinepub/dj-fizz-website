import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BookingForm } from '../backend';

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<BookingForm[]>({
    queryKey: ['allSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export interface BookingFormInput {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  guestCount: number;
  additionalDetails: string;
}

export function useSubmitForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: BookingFormInput) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitForm(
        data.name,
        data.email,
        data.phone,
        data.eventType,
        data.eventDate,
        data.venue,
        BigInt(data.guestCount),
        data.additionalDetails
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allSubmissions'] });
    },
  });
}
