import type { Schema, Struct } from '@strapi/strapi';

export interface PathologyAlias extends Struct.ComponentSchema {
  collectionName: 'components_pathology_aliases';
  info: {
    displayName: 'Alias';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface QaQAPair extends Struct.ComponentSchema {
  collectionName: 'components_qa_q_a_pairs';
  info: {
    displayName: 'Q/A pair';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODc3MDIzOTksImp0aSI6IjE4YWM2ODU5LWM2YjUtNGNjOS05ZWFlLWIzMmE0ZWFhYTQ0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyIsIkJPWCJdLCJ2YyI6IjlhZDExOTMxIn0.A2gB9YjfVbLL8_rgdBlSmDTGeP0OehBUA_sqodULRTRITLRrJ5fpChk0k6JSyXInKQNNPr4fzSqpleo2AL6rOQ';
          output: 'Markdown';
          preset: 'standard';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface QuizProposition extends Struct.ComponentSchema {
  collectionName: 'components_quiz_propositions';
  info: {
    displayName: 'Proposition';
  };
  attributes: {
    feedback: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODc3MDIzOTksImp0aSI6IjE4YWM2ODU5LWM2YjUtNGNjOS05ZWFlLWIzMmE0ZWFhYTQ0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyIsIkJPWCJdLCJ2YyI6IjlhZDExOTMxIn0.A2gB9YjfVbLL8_rgdBlSmDTGeP0OehBUA_sqodULRTRITLRrJ5fpChk0k6JSyXInKQNNPr4fzSqpleo2AL6rOQ';
          output: 'Markdown';
          preset: 'light';
        }
      >;
    isCorrect: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuizQuizBlock extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_blocks';
  info: {
    displayName: 'quiz_block';
  };
  attributes: {
    explanation: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODc3MDIzOTksImp0aSI6IjE4YWM2ODU5LWM2YjUtNGNjOS05ZWFlLWIzMmE0ZWFhYTQ0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyIsIkJPWCJdLCJ2YyI6IjlhZDExOTMxIn0.A2gB9YjfVbLL8_rgdBlSmDTGeP0OehBUA_sqodULRTRITLRrJ5fpChk0k6JSyXInKQNNPr4fzSqpleo2AL6rOQ';
          output: 'Markdown';
          preset: 'rich';
        }
      >;
    propositions: Schema.Attribute.Component<'quiz.proposition', true> &
      Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    shuffle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_images';
  info: {
    displayName: 'Gallery image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.Text;
    credit: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sourceUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TrainingResumeDEntrainement extends Struct.ComponentSchema {
  collectionName: 'components_training_resume_d_entrainements';
  info: {
    description: '';
    displayName: 'R\u00E9sum\u00E9 d\u2019entra\u00EEnement';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    biopsy_required: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    correction: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODc3MDIzOTksImp0aSI6IjE4YWM2ODU5LWM2YjUtNGNjOS05ZWFlLWIzMmE0ZWFhYTQ0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyIsIkJPWCJdLCJ2YyI6IjlhZDExOTMxIn0.A2gB9YjfVbLL8_rgdBlSmDTGeP0OehBUA_sqodULRTRITLRrJ5fpChk0k6JSyXInKQNNPr4fzSqpleo2AL6rOQ';
          output: 'Markdown';
          preset: 'light';
        }
      >;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    summary: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODc3MDIzOTksImp0aSI6IjE4YWM2ODU5LWM2YjUtNGNjOS05ZWFlLWIzMmE0ZWFhYTQ0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyIsIkJPWCJdLCJ2YyI6IjlhZDExOTMxIn0.A2gB9YjfVbLL8_rgdBlSmDTGeP0OehBUA_sqodULRTRITLRrJ5fpChk0k6JSyXInKQNNPr4fzSqpleo2AL6rOQ';
          output: 'Markdown';
          preset: 'light';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pathology.alias': PathologyAlias;
      'qa.q-a-pair': QaQAPair;
      'quiz.proposition': QuizProposition;
      'quiz.quiz-block': QuizQuizBlock;
      'shared.gallery-image': SharedGalleryImage;
      'training.resume-d-entrainement': TrainingResumeDEntrainement;
    }
  }
}
