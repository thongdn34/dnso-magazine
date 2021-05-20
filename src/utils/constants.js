export const categoryNames = {
  ADVISORIES: "Advisories",
  BUSINESS: "Business",
  CULTURALS: "Culturals",
  EVENTS: "Events",
  INVESTS: "Invests",
  LIFESTYLES: "Lifestyles",
  TECHNOLOGIES: "Technologies",
  VIDEOS: "Videos",
  VIEWS: "Views",
};
export const subCategories = {
  ABOUT_BUSINESS: "About business",
  BOOKS: "Books",
  BUSINESSMENS: "Businessmens",
  COMMERCES: "Commerces",
  EDUCATIONS: "Educations",
  ENTERPRISES: "Enterprises",
  EXISTENCES: "Existences",
  EXPERTS: "Experts",
  FINANCE: "Finance",
  GOVERNS: "Governs",
  HEALTHS: "Healths",
  LANDS: "Lands",
  STARTUPS: "Startups",
  TRAVELS: "Travels",
  ENTERTAIMENT: 'Entertainment'
};
export const nestedCategories = {
  BANKS: "Banks",
  STOCKS: "Stocks",
  INSURANCE: "Insurrance",
  GOLDS: "Golds",
  SOCIETY: "Society",
  TENDENCYS: "Tendencys",
  KOLS: "KOLs",
  CONSUMPTION: "Consumption",
  ADVISORY: "Advisory",
  NUTRITION: "Nutrition",
  MEN: "Men",
  WOMAN: "Women",
  ADMISSIONS: "Admissions",
  STUDY_ABROARD: "Study abroad",
  PICTURES: "Pictures",
  DESTINATION: "Destionation",
  DISCOVER: "Discover",
  EATING_PLAYING: "Eating and playing",
  VIETSTART: "Viet Star",
  STAGE: "Stage",
  FILM: "Film",
  FASHION: "Fashion",
  MAKE_UP: "Make up",
  GOOD_HEALTH: "Good healths"
};
export const menus = [
  {
    id: categoryNames.VIEWS,
    linkText: "Góc nhìn",
    link: `/categories/${categoryNames.VIEWS}`,
    child: true,
    submenu: [
      {
        id: subCategories.EXPERTS,
        link: `/sub_categories/${subCategories.EXPERTS}`,
        linkText: "Chuyên gia"
        // third_menu: [
        //   {
        //     id: subCategories.EDUCATIONS,
        //     link: "/",
        //     linkText: "Giáo dục"
        //   }
        // ]
      },
      {
        id: subCategories.ABOUT_BUSINESS,
        link: `/sub_categories/${subCategories.ABOUT_BUSINESS}`,
        linkText: "Chuyện làm ăn"
      }
    ]
  },
  {
    id: categoryNames.INVESTS,
    linkText: "Đầu tư",
    link: `/categories/${categoryNames.INVESTS}`,
    child: true,
    submenu: [
      {
        id: subCategories.LANDS,
        link: `/sub_categories/${subCategories.LANDS}`,
        linkText: "Bất động sản"
      },
      {
        id: subCategories.FINANCE,
        link: `/sub_categories/${subCategories.FINANCE}`,
        linkText: "Tài chính",
        child: true,
        third_menu: [
          {
            id: nestedCategories.BANKS,
            link: `/nested_categories/${nestedCategories.BANKS}`,
            linkText: "Ngân hàng"
          },
          {
            id: nestedCategories.STOCKS,
            link: `/nested_categories/${nestedCategories.STOCKS}`,
            linkText: "Chứng khoán"
          },
          {
            id: nestedCategories.INSURANCE,
            link: `/nested_categories/${nestedCategories.INSURANCE}`,
            linkText: "Bảo hiểm"
          },
          {
            id: nestedCategories.GOLDS,
            link: `/nested_categories/${nestedCategories.GOLDS}`,
            linkText: "Vàng"
          }
        ]
      }
    ]
  },
  {
    id: categoryNames.BUSINESS,
    linkText: "Kinh doanh",
    link: `/categories/${categoryNames.BUSINESS}`,
    child: true,
    submenu: [
      {
        id: subCategories.ENTERPRISES,
        link: `/sub_categories/${subCategories.ENTERPRISES}`,
        linkText: "Doanh nghiệp"
      },
      {
        id: subCategories.BUSINESSMENS,
        link: `/sub_categories/${subCategories.BUSINESSMENS}`,
        linkText: "Doanh nhân"
      },
      {
        id: subCategories.COMMERCES,
        link: `/sub_categories/${subCategories.COMMERCES}`,
        linkText: "Thương mại"
      },
      {
        id: subCategories.STARTUPS,
        link: `/sub_categories/${subCategories.STARTUPS}`,
        linkText: "Khởi nghiệp"
      },
      {
        id: subCategories.GOVERNS,
        link: `/sub_categories/${subCategories.GOVERNS}`,
        linkText: "Quản trị"
      }
    ]
  },
  {
    id: categoryNames.LIFESTYLES,
    linkText: "Nhịp sống",
    link: `/categories/${categoryNames.LIFESTYLES}`,
    child: true,
    submenu: [
      {
        id: subCategories.EXISTENCES,
        link: `/sub_categories/${subCategories.EXISTENCES}`,
        linkText: "Đời sống",
        child: true,
        third_menu: [
          {
            id: nestedCategories.SOCIETY,
            link: `/nested_categories/${nestedCategories.SOCIETY}`,
            linkText: "Xã hội"
          },
          {
            id: nestedCategories.TENDENCYS,
            link: `/nested_categories/${nestedCategories.TENDENCYS}`,
            linkText: "Xu hướng"
          },
          {
            id: nestedCategories.KOLS,
            link: `/nested_categories/${nestedCategories.KOLS}`,
            linkText: "Nhân vật"
          },
          {
            id: nestedCategories.CONSUMPTION,
            link: `/nested_categories/${nestedCategories.CONSUMPTION}`,
            linkText: "Tiêu dùng"
          }
        ]
      },
      {
        id: subCategories.HEALTHS,
        link: `/sub_categories/${subCategories.HEALTHS}`,
        linkText: "Sức khỏe",
        child: true,
        third_menu: [
          {
            id: nestedCategories.ADVISORY,
            link: `/nested_categories/${nestedCategories.ADVISORY}`,
            linkText: "Tư vấn"
          },
          {
            id: nestedCategories.NUTRITION,
            link: `/nested_categories/${nestedCategories.NUTRITION}`,
            linkText: "Dinh dưỡng"
          },
          {
            id: nestedCategories.GOOD_HEALTH,
            link: `/nested_categories/${nestedCategories.GOOD_HEALTH}`,
            linkText: "Sống khỏe"
          },
          {
            id: nestedCategories.MEN,
            link: `/nested_categories/${nestedCategories.MEN}`,
            linkText: "Đàn ông"
          },
          {
            id: nestedCategories.WOMAN,
            link: `/nested_categories/${nestedCategories.WOMAN}`,
            linkText: "Đàn bà"
          }
        ]
      }
    ]
  },
  {
    id: categoryNames.CULTURALS,
    linkText: "Văn hóa",
    link: `/categories/${categoryNames.CULTURALS}`,
    child: true,
    submenu: [
      {
        id: subCategories.EDUCATIONS,
        linkText: "Giáo dục",
        link: `/sub_categories/${subCategories.EDUCATIONS}`,
        child: true,
        third_menu: [
          {
            id: nestedCategories.ADMISSIONS,
            link: `/nested_categories/${nestedCategories.ADMISSIONS}`,
            linkText: "Tuyển sinh"
          },
          {
            id: nestedCategories.STUDY_ABROARD,
            link: `/nested_categories/${nestedCategories.STUDY_ABROARD}`,
            linkText: "Du học"
          },
        ]
      },
      {
        id: subCategories.TRAVELS,
        linkText: "Du lịch",
        link: `/sub_categories/${subCategories.TRAVELS}`,
        child: true,
        third_menu: [
          {
            id: nestedCategories.PICTURES,
            link: `/nested_categories/${nestedCategories.PICTURES}`,
            linkText: "Ảnh"
          },
          {
            id: nestedCategories.DESTINATION,
            link: `/nested_categories/${nestedCategories.DESTINATION}`,
            linkText: "Điểm đến"
          },
          {
            id: nestedCategories.DISCOVER,
            link: `/nested_categories/${nestedCategories.DISCOVER}`,
            linkText: "Khám phá"
          },
          {
            id: nestedCategories.EATING_PLAYING,
            link: `/nested_categories/${nestedCategories.EATING_PLAYING}`,
            linkText: "Ăn gì Chơi gì"
          },
        ]
      },
      {
        id: subCategories.ENTERTAIMENT,
        linkText: "Giải trí",
        link: `/sub_categories/${subCategories.ENTERTAIMENT}`,
        child: true,
        third_menu: [
          {
            id: nestedCategories.VIETSTART,
            link: `/nested_categories/${nestedCategories.VIETSTART}`,
            linkText: "Sao Việt"
          },
          {
            id: nestedCategories.STAGE,
            link: `/nested_categories/${nestedCategories.STAGE}`,
            linkText: "Sân khấu"
          },
          {
            id: nestedCategories.FILM,
            link: `/nested_categories/${nestedCategories.FILM}`,
            linkText: "Điện ảnh"
          },
          {
            id: nestedCategories.FASHION,
            link: `/nested_categories/${nestedCategories.FASHION}`,
            linkText: "Thời trang"
          },
          {
            id: nestedCategories.MAKE_UP,
            link: `/nested_categories/${nestedCategories.MAKE_UP}`,
            linkText: "Làm đẹp"
          },
        ]
      },
      {
        id: subCategories.BOOKS,
        linkText: "Sách",
        link: `/sub_categories/${subCategories.BOOKS}`,
      },
    ]
  },
  {
    id: categoryNames.TECHNOLOGIES,
    linkText: "Công nghệ",
    link: `/categories/${categoryNames.TECHNOLOGIES}`,
    child: false
  }
];
export const baseURL = "https://dns-be.cyou";
