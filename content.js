// Edit this file to update the website. No layout changes are needed.
// Empty URLs are intentionally disabled until you provide the real information.
const SITE = {
  name: { en: 'Duy Anh Nguyen', vi: 'Nguyễn Duy Anh' },
  photo: '', // e.g. 'assets/profile.jpg'
  role: { en: 'Undergraduate Researcher · NLP for Language Education', vi: 'Sinh viên nghiên cứu · NLP trong giáo dục ngôn ngữ' },
  bio: {
    en: 'I am an undergraduate researcher interested in natural language processing for language teaching and assessment, with a particular focus on automated essay scoring, learner corpora and educational feedback generation.',
    vi: 'Tôi là sinh viên nghiên cứu về xử lý ngôn ngữ tự nhiên trong giảng dạy và đánh giá ngôn ngữ, đặc biệt tập trung vào chấm điểm bài luận tự động, ngữ liệu người học và sinh phản hồi trong giáo dục.'
  },
  // Set enabled to false after the talk to hide this section.
  talk: {
    enabled: true,
    formUrl: '', // Paste your public Google Form response link here.
    heading: { en: 'Upcoming Talk & Q&A', vi: 'Buổi chia sẻ sắp tới & Hỏi đáp' },
    description: {
      en: 'I have been invited back to my former high school for an upcoming talk. If you are a student attending the session, feel free to submit your questions in advance. This will help me prepare and make our discussion more useful to you.',
      vi: 'Tôi vừa được mời trở lại trường THPT cũ để tham gia một buổi chia sẻ. Nếu các bạn học sinh có câu hỏi dành cho tôi, hãy gửi trước qua biểu mẫu bên dưới. Điều này sẽ giúp tôi chuẩn bị tốt hơn và mang đến một buổi trao đổi hữu ích hơn cho các bạn.'
    },
    button: { en: 'Submit a question', vi: 'Gửi câu hỏi' },
    pendingNote: { en: 'The question submission form will be available soon.', vi: 'Biểu mẫu gửi câu hỏi sẽ sớm được mở.' },
    activeNote: { en: 'Opens in Google Forms in a new tab.', vi: 'Biểu mẫu Google Forms sẽ mở trong một thẻ mới.' }
  },
  publications: [
    {
      title: 'Does Continued Pretraining on a Learner Corpus Improve Automated Essay Scoring on English Proficiency Tests? Evidence from EFCAMDAT',
      authors: 'Duy Anh Nguyen',
      venue: 'Findings of the Association for Computational Linguistics: IJCNLP-AACL 2026',
      description: { en: 'Investigates when continued pretraining on learner writing benefits automated essay scoring and whether those gains transfer across English proficiency tests.', vi: 'Nghiên cứu điều kiện mà tiền huấn luyện tiếp tục trên ngữ liệu người học giúp cải thiện chấm điểm bài luận tự động và khả năng chuyển giao giữa các kỳ thi tiếng Anh.' },
      links: [ { label: { en: 'Paper (PDF)', vi: 'Bài báo (PDF)' }, url: 'https://aclanthology.org/2026.findings-aacl.24.pdf' }, { label: 'ACL Anthology', url: 'https://aclanthology.org/2026.findings-aacl.24/' }, { label: 'arXiv', url: 'https://arxiv.org/abs/2605.25924' } ]
    },
    {
      title: 'Predicting PHQ-9 Depression Scores from Free-Text Responses Using a Hybrid SBERT and Bi-LSTM Architecture',
      authors: 'Duy Anh Nguyen, Trung-Hau Nguyen, Hoang-Khoa Trinh',
      venue: 'Vietnam Journal of Computer Science, 2026',
      description: { en: 'Explores the prediction of PHQ-9 questionnaire scores from free-text responses using a hybrid neural architecture.', vi: 'Nghiên cứu dự đoán điểm PHQ-9 từ câu trả lời văn bản tự do bằng kiến trúc mạng nơ-ron kết hợp.' },
      links: [ { label: 'DOI', url: 'https://doi.org/10.1142/S2196888826400038' } ]
    }
  ],
  education: [
    { title: { en: 'BSc (Hons) Computing', vi: 'Cử nhân (Danh dự) ngành Computing' }, detail: { en: 'University of Greenwich · Expected graduation: 2027', vi: 'Đại học Greenwich · Dự kiến tốt nghiệp: 2027' } }
  ],
  achievements: [
    { en: 'IELTS Academic — Overall band 8.0', vi: 'IELTS Academic — Điểm tổng 8.0' }
  ],
  contacts: [
    { label: { en: 'Curriculum Vitae (PDF)', vi: 'Lý lịch học thuật (PDF)' }, url: '', icon: 'document' },
    { label: 'Email', url: '' },
    { label: 'Google Scholar', url: '' },
    { label: 'ORCID', url: '' },
    { label: 'GitHub', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'ACL Anthology', url: 'https://aclanthology.org/people/duy-anh-nguyen/' }
  ]
};
const TEXT = {
  en: { overview: 'Overview', publications: 'Publications', achievements: 'Other Achievements', affiliation: 'Affiliation', contact: 'Contact', photo: 'Profile photo', missing: 'Not added yet', contactNote: 'Additional contact links will be added soon.', footer: 'Academic homepage' },
  vi: { overview: 'Giới thiệu', publications: 'Công bố khoa học', achievements: 'Thành tích khác', affiliation: 'Đơn vị học tập', contact: 'Liên hệ', photo: 'Ảnh chân dung', missing: 'Chưa được thêm', contactNote: 'Các thông tin liên hệ khác sẽ được cập nhật.', footer: 'Trang cá nhân học thuật' }
};
