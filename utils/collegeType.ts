export interface College {
  collegeInfo: {
    avgFee: string;
    accreditationBody: string;
    approvedBy: string;
    estYear: string;
  };
  filter_fields: {
    city: string;
    stream: string[];
    degree: { label: string; url: string }[];
    state: string;
  };
  _createdAt: string; // ISO date string
  _updatedAt: string; // ISO date string
  admissionInfo: string;
  rankingInfo: string;
  _type: string;
  hightestPackage: string;
  placementStats: {
    highestPackage: string;
    medianSalary: string;
    avgPackage: string;
    placementStatsInfo: string;
    placementInfo: string;
  };
  cutOff: {
    cutoffData: {
      genNeutral: number;
      obcFemale: number;
      stNeutral: number;
      _key: string;
      genFemale: number;
      stFemale: number;
      genPwd: number;
      courseFullname: string;
      obcNeutral: number;
      courseShortName: string;
      scNeutral: number;
    }[];
    isCutoff: boolean;
    cutoffInfo: string;
  };
  collegeAbout: {
    aboutImg: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    about: string;
  };
  courses: {
    studyMode: string;
    courseBrochureLink: string;
    duration: string;
    fees: string;
    name: string;
    eligibility: string[];
    coursesOffered: string;
    _key: string;
  }[];
  _rev: string;
  shortName: string;
  _id: string;
  recruiters: {
    _type: string;
    _key: string;
    asset: {
      _type: string;
      _ref: string;
    };
  }[];
  reviews: {
    reviewList: {
      reviewInfo: string;
      name: string;
      rating: number;
      _key: string;
      title: string;
      date: string; // ISO date string
    }[];
    totalReviews: number;
    overallRating: number;
    placementRating: number;
    facultyRating: number;
    infraRating: number;
  };
  mainContent: {
    collegeImg: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    location: string;
    info: string;
    overallRating: string;
    name: string;
    brochureLink: string;
    logo: {
      _type: string;
      asset: {
        _type: string;
        _ref: string;
      };
    };
  };
  qualifyingExam: string;
  updates: {
    releaseDate: string; // ISO date string
    updateLink: string;
    _key: string;
    info: string;
  }[];
  faqs: {
    _key: string; // Unique identifier for each item
    question: string; // The question being asked
    answer: string; // The answer provided
  }[];
}
