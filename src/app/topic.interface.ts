export interface Topic {
    title: string;
    info: string;
    subtopics: SubTopics[]
}
export interface SubTopics {
    subTitle: string;
    subInfo: string;
}