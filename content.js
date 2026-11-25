// Edit this file to update the website. No layout changes are needed.
// Empty URLs are intentionally disabled until you provide the real information.
const SITE = {
  name: { en: 'Duy Anh Nguyen', vi: 'Nguyễn Duy Anh' },
  photo: '', // e.g. 'assets/profile.jpg'
  role: { en: 'Undergraduate Student @ University of Greenwich (Vietnam)', vi: 'Sinh viên Đại học Greenwich (Việt Nam)' },
  bio: {
    en: 'I am an undergraduate student pursuing a degree in Computing at University of Greenwich (UK) through a transnational education program with FPT university delivered in Vietnam, my specialisation is Natural Language Processing.',
    vi: 'Mình là cựu học sinh trường THPT Thực Hành Sư Phạm K10, hiện là sinh viên đại học đang theo học ngành Computing tại Đại học Greenwich (Vương Quốc Anh) thông qua chương trình giáo dục xuyên quốc gia với Đại học FPT tại Việt Nam, chuyên môn của mình là Xử lý ngôn ngữ tự nhiên.'
  },
  // Set enabled to false after the talk to hide this section.
  talk: {
    enabled: true,
    formUrl: '', // Paste your public Google Form response link here.
    heading: { en: 'Upcoming Talk & Q&A', vi: 'Dành cho các bạn học sinh THSP' },
    description: {
      en: 'I have been invited back to my former high school for an upcoming talk. If you are a student attending the session, feel free to submit your questions in advance. This will help me prepare and make our discussion more useful to you.',
      vi: 'Sắp tới mình hân hạnh được cô Dẹn mời về trường THPT Thực Hành Sư Phạm để có một vài chia sẻ với các bạn. Nếu bạn là học sinh lớp cô Dẹn, vui lòng gửi trước câu hỏi của bạn để mình có thể chuẩn bị trước và trả lời một cách chu đáo nhất. Còn nếu không thì thôi hihi. '
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
      description: { en: 'Investigates whether continued pretraining on a learner corpus benefits automated essay scoring, and whether it benefits transfer learning across different English proficiency tests.', vi: 'Nghiên cứu liệu tiếp tục tiền huấn luyện trên ngữ liệu người học có giúp cải thiện hiệu quả mô hình chấm điểm bài luận tự động hay không, và khả năng học chuyển giao trên dữ liệu từ các kỳ thi tiếng Anh khác nhau của mô hình được tiếp tục tiền huấn luyện.' },
      links: [ { label: { en: 'Paper (PDF)', vi: 'Bài báo (PDF)' }, url: 'https://aclanthology.org/2026.findings-aacl.24.pdf' }, { label: 'URL', url: 'https://aclanthology.org/2026.findings-aacl.24/' }, { label: 'arXiv', url: 'https://arxiv.org/abs/2605.25924' } ]
    },
    {
      title: 'Predicting PHQ-9 Depression Scores from Free-Text Responses Using a Hybrid SBERT and Bi-LSTM Architecture',
      authors: 'Duy Anh Nguyen, Trung-Hau Nguyen, Hoang-Khoa Trinh',
      venue: 'Vietnam Journal of Computer Science, 2026',
      description: { en: 'Explores the prediction of PHQ-9 questionnaire scores from free-text responses using a hybrid neural architecture.', vi: 'Nghiên cứu dự đoán điểm PHQ-9 trong chẩn đoán trầm cảm từ câu trả lời bằng văn bản tự do thay vì trắc nghiệm. Sử dụng kết hợp giữa SentenceBERT và Bi-LSTM.' },
      links: [ { label: { en: 'Paper (PDF)', vi: 'Bài báo (PDF)' }, url: 'https://www.worldscientific.com/doi/epdf/10.1142/S2196888826400038' }, { label: 'URL', url: 'https://doi.org/10.1142/S2196888826400038' } ]
    },
    {
      title: 'Error-Supervised Synthetic Learner Writing for Automated Essay Scoring',
      authors: 'Duy Anh Nguyen, Trung-Hau Nguyen, Hoang-Khoa Trinh',
      venue: 'arXiv preprint arXiv:2605.25924, 2026',
      description: { en: 'We don\'t talk about this one....', vi: 'Bài này vừa bị reviewer dập tan nát...' },
      links: [ { label: { en: 'arXiv', vi: 'arXiv' }, url: 'https://arxiv.org/abs/2605.25924' } ]
    }
  ],
  education: [
    { title: { en: 'BSc (Hons) Computing', vi: 'Cử nhân ngành Computing' }, detail: { en: 'University of Greenwich · Expected graduation: 2027', vi: 'Đại học Greenwich · Dự kiến tốt nghiệp: 2027' } }
  ],
  achievements: [
    { en: 'GRE Talent Scholarship 2024 (50% tuition)', vi: 'Học bổng GRE Talent 2024 (50% Học phí)' },
    { en: 'Best Student Award Summer 2025 (Greenwich Vietnam - Can Tho Campus)', vi: 'Giải thưởng Best Student kỳ Summer 2025 (Greenwich Việt Nam - Cơ sở Cần Thơ)' },
    { en: '1st Place - Greenwich Vietnam Promptkathon 2025 (Can Tho Campus)', vi: 'Quán Quân Promptkathon 2025 - Greenwich Việt Nam, cơ sở Cần Thơ' },
    { en: 'IELTS Academic — Overall 8.0', vi: 'IELTS 8.0' },
  ],
  contacts: [
    { label: { en: 'Curriculum Vitae (PDF)', vi: 'CV (PDF)' }, url: '', icon: 'document' },
    { label: 'Email', url: 'na6367q@gre.ac.uk' },
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=f5qsSbwAAAAJ&hl=en' },
    { label: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0009-0003-1599-2188' },
    { label: 'GitHub', url: 'https://github.com/KatoTheFluffyWolf' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/duy-anh-nguyen-b829aa2b9/' },
    { label: 'ACL Anthology', url: 'https://aclanthology.org/people/duy-anh-nguyen/' }
  ]
};
const TEXT = {
  en: { overview: 'Overview', publications: 'Publications', achievements: 'Other Achievements', affiliation: 'Affiliation', contact: 'Contact', photo: 'Profile photo', missing: 'Not added yet', contactNote: 'Additional contact links will be added soon.', footer: 'Homepage' },
  vi: { overview: 'Giới thiệu', publications: 'Nghiên cứu khoa học', achievements: 'Thành tích khác', affiliation: 'Học Vấn', contact: 'Liên hệ', photo: 'Ảnh chân dung', missing: 'Chưa được thêm', contactNote: 'Các thông tin liên hệ khác sẽ được cập nhật.', footer: 'Trang cá nhân' }
};
