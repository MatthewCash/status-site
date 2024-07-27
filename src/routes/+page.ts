export const prerender = true;
export const ssr = false;

export type State = 'Healthy' | 'Unhealthy' | 'Offline';

export interface Status {
    state: State;
    text: string;
}

export interface Service {
    name: string;
    desc: string;
    status: Status;
}

export interface SubSection {
    name: string;
    desc: string;
    items: Item[];
}

export type Item =
    | {
          Service: Service;
          SubSection?: never;
      }
    | {
          Service?: never;
          SubSection: SubSection;
      };

export interface Section {
    time: number;
    overall_state: State;
    items: Item[];
}

export async function load({ fetch }) {
    const res = await fetch('https://api.status.matthew-cash.com/status.json');
    const status: Section = await res.json();

    return { status };
}
