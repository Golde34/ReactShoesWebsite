const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            userEmail: 'minh.damt.2000@gmail.com',
            userPassword: bcrypt.hashSync('12122000', 8), 
            userFname: 'Đàm Tuấn',
            userLname: 'Minh',
            address:'',
            phone: '0123456789',
            isAdmin: false,
        },
        {
            userEmail: 'tamnoa48@gmail.com',
            userPassword: bcrypt.hashSync('12345678', 8), 
            userFname: 'Nguyễn Thị',
            userLname: 'Minh Tâm',
            address:'',
            phone: '0123456789',
            isAdmin: false,
        },
        {
            userEmail: 'phuongbui2207@yahoo.com',
            userPassword: bcrypt.hashSync('12345678', 8), 
            userFname: 'Bùi Khánh',
            userLname: 'Phương',
            address:'',
            phone: '0123456789',
            isAdmin: false,
        },
        {
            userEmail: 'caonhungtoank27@gmail.com',
            userPassword: bcrypt.hashSync('07012001', 8), 
            userFname: 'Cao Cẩm',
            userLname: 'Nhung',
            address:'',
            phone: '0986263506',
            isAdmin: false,
        },
        {
            userEmail: 'tunguyen.uet@gmail.com',
            userPassword: bcrypt.hashSync('01012000', 8), 
            userFname: 'Nguyễn Ngọc',
            userLname: 'Tú',
            address:'',
            phone: '0911110000',
            isAdmin: false,
        },
        {
            userEmail: 'ngtuanlong27@gmail.com',
            userPassword: bcrypt.hashSync('02012000', 8), 
            userFname: 'Nguyễn Tuấn',
            userLname: 'Long',
            address:'',
            phone: '0911110001',
            isAdmin: false,
        },
        {
            userEmail: 'phamviethoang@gmail.com',
            userPassword: bcrypt.hashSync('03012000', 8), 
            userFname: 'Phạm Việt',
            userLname: 'Hoàng',
            address:'',
            phone: '0911110002',
            isAdmin: false,
        },
        {
            userEmail: 'nguyenthanhlong8520@gmail.com',
            userPassword: bcrypt.hashSync('04012000', 8), 
            userFname: 'Nguyễn Thành',
            userLname: 'Long',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'huyson.scientist@gmail.com',
            userPassword: bcrypt.hashSync('05012000', 8), 
            userFname: 'Nguyễn Huy',
            userLname: ' Sơn',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: '17021248@vnu.edu.vn',
            userPassword: bcrypt.hashSync('06012000', 8), 
            userFname: 'Trần  Đức',
            userLname: 'Hiếu',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'gaumeochit162@gmail.com',
            userPassword: bcrypt.hashSync('07012000', 8), 
            userFname: 'Nguyễn Quý',
            userLname: 'Thịnh',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'copycity1000@gmail.com',
            userPassword: bcrypt.hashSync('08012000', 8), 
            userFname: 'Nguyễn Đăng',
            userLname: 'An',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'quocanuetcs@gmail.com',
            userPassword: bcrypt.hashSync('09012000', 8), 
            userFname: 'Nguyễn Quốc',
            userLname: 'An',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'ntdat041@gmail.com',
            userPassword: bcrypt.hashSync('10012000', 8), 
            userFname: 'Nguyễn Tiến',
            userLname: 'Đạt',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'congminhson123@gmail.com',
            userPassword: bcrypt.hashSync('11012000', 8), 
            userFname: 'Công Minh',
            userLname: 'Sơn',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'nguyenhuy8100@gmail.com',
            userPassword: bcrypt.hashSync('12012000', 8), 
            userFname: 'Nguyễn Quang',
            userLname: 'Huy',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'tombstone2307@gmail.com',
            userPassword: bcrypt.hashSync('13012000', 8), 
            userFname: 'Nguyễn Tiến',
            userLname: 'Đạt',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'hainguyen29031412@gmail.com',
            userPassword: bcrypt.hashSync('14012000', 8), 
            userFname: 'Nguyễn Phúc',
            userLname: 'Hải',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        }, 
        {
            userEmail: 'hhoanguet@gmail.com',
            userPassword: bcrypt.hashSync('15012000', 8), 
            userFname: 'Nguyễn Huy',
            userLname: 'Hoàng',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'banggiangle2015@gmail.com',
            userPassword: bcrypt.hashSync('16012000', 8), 
            userFname: 'Lê Bằng',
            userLname: 'Giang',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'bongcules@gmail.com',
            userPassword: bcrypt.hashSync('17012000', 8), 
            userFname: 'Nguyễn Thị',
            userLname: 'Quyên',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'phamngoctoan63k@gmail.com',
            userPassword: bcrypt.hashSync('18012000', 8), 
            userFname: 'Phạm Ngọc',
            userLname: 'Toàn',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'nguyenduccong28102000@gmail.com',
            userPassword: bcrypt.hashSync('19012000', 8), 
            userFname: 'Nguyễn Đức',
            userLname: ' Công',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'tienanh2k1409@gmail.com',
            userPassword: bcrypt.hashSync('20012000', 8), 
            userFname: 'Đinh Tiến',
            userLname: 'Anh',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'hoang0112@gmail.com',
            userPassword: bcrypt.hashSync('21012000', 8), 
            userFname: 'Nguyễn Việt',
            userLname: 'Hoàng',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'lamhddh@gmail.com',
            userPassword: bcrypt.hashSync('22012000', 8), 
            userFname: 'Nguyễn Thanh',
            userLname: 'Lâm',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        }, 
        {
            userEmail: 'hotuanlong0123@gmail.com',
            userPassword: bcrypt.hashSync('23012000', 8), 
            userFname: 'Hồ Tuấn',
            userLname: 'Long',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        }, 
        {
            userEmail: 'dothang.thanhhoa@gmail.com',
            userPassword: bcrypt.hashSync('24012000', 8), 
            userFname: 'Đỗ Trịnh',
            userLname: 'Quốc Thắng',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },     
        {
            userEmail: 'tuantitz97@gmail.com',
            userPassword: bcrypt.hashSync('25012000', 8), 
            userFname: 'Nguyễn Trung',
            userLname: 'Phong',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'xuongthin2000@gmail.com',
            userPassword: bcrypt.hashSync('26012000', 8), 
            userFname: 'Nguyễn Xương',
            userLname: 'Thìn',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'maiminhlqd@gmail.com',
            userPassword: bcrypt.hashSync('27012000', 8), 
            userFname: 'Mai Xuân',
            userLname: 'Minh',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },
        {
            userEmail: 'vutthanhlam@gmail.com',
            userPassword: bcrypt.hashSync('28012000', 8), 
            userFname: 'Vu Thanh',
            userLname: 'Lam',
            address:'',
            phone: '0911110003',
            isAdmin: false,
        },     
    ],
    products:[
        {
            idProduct: 8,
            productName: 'Giày unisex Converse Chuck Taylor All Star Classic White Low',
            productPrice:1400000,
            productDescription:"Classic là dòng bán chạy số 1 của Converse. Đến từ thương Hiệu giày thể thao hàng đầu nước Mỹ, mẫu giày này đã nhanh chóng được toàn thế giới ưa chuộng không chỉ bởi giá thành phù hợp mà còn bởi khả năng mix đồ đa dạng với các loại trang phục khác nhau. Mẫu giày biểu tượng hơn 100 năm & bán chạy nhất mọi thời đại của Converse Với 6 sắc màu cơ bản thì đen trắng là màu dễ phối được nHiều bạn tin chọn. Đôi giày mà ai cũng nên có vì độ bền, độ đẹp và siêu dễ phối đồ, hợp với tất cả thể loại trang phục.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 9,
            productName: 'Giày Converse Chuck Taylor All Star Classic White High',
            productPrice:1500000,
            productDescription:"Classic White cao cổ mang lại cảm giác năng động, trẻ trung. Chất vải Canvas nhẹ, tạo cảm giác thoải mái. Đơn giản, dễ phối đồ, phù hợp với mọi hoạt động.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 10,
            productName: 'Giày Chuck 1970s Black Low',
            productPrice:2000000,
            productDescription:"Phiên bản cổ thấp màu đen cá tính của Chuck 1970s được giới trẻ nhiệt tình ưu ái bởi sự hiện đại, tiện dụng. Thay đổi ở đế giày với màu trắng ngà và cao hơn so với các phiên bản khác. Phần thân giày có màu sắc đồng bộ với đế giày và có độ thanh mảnh hơn. Chất vải Canvas dày, nhẹ, bền chắc giúp người dùng có được sự thoải mái. Đường chỉ trắng chạy dọc thân giày được chăm chút tỉ mỉ hơn rất nhiều.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 11,
            productName: 'Giày unisex Converse Chuck Taylor All Star Classic Black - High',
            productPrice:1500000,
            productDescription:"Classic All Black cao cổ mang lại cảm giác năng động, trẻ trung. Che khuyết điểm chân to ngang, với các bạn chân bè chọn cao cổ sẽ không lo nhấc gót nữa. Chất vải Canvas nhẹ, tạo cảm giác thoải mái. Đơn giản, dễ phối đồ, phù hợp với mọi hoạt động. Đặc biệt toàn bộ phần đế cao su cũng được sơn đen giúp các bạn bỏ đi cảm giác khó chịu mỗi khi phần cao su trắng bị dính bẩn qua nhiều lần sử dụng.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 12,
            productName: 'Giày Converse Chuck Taylor All Star High Street',
            productPrice:1300000,
            productDescription:"Mới lạ và sang trọng với những họa tiết chữ Converse được in bao quanh cổ giày, kết hợp cùng chất vải Canvas mỏng, nhẹ bền bỉ khiến đôi chân luôn cảm thấy êm ái, dễ chịu khi di chuyển những quãng đường dài. Phần lưỡi gà được đệm dày dặn cùng với logo được gia công tỉ mỉ tạo điểm nhấn nổi bật cho dòng sản phẩm.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 13,
            productName: 'Giày Converse Chuck 70 Signature High',
            productPrice:1300000,
            productDescription:"Dễ mix match và được phát triển dựa trên dòng sản phẩm cực hot Chuck 70 Classic, Converse chuck 70 signature được lòng của các bạn trẻ ngay từ khi mới chỉ tung ra những hình ảnh demo. Ở sản phẩm này,  cách tân đổi mới chính ở phần outlook cùng dòng chữ quen thuộc CHUCK TAYLOR được in nổi theo thiết kế Wordmark để tạo ấn tượng mạnh hơn với hiệu ứng thị giác.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 14,
            productName: 'Giày Converse Run Star Hike Twisted Classic Foundational Canvas',
            productPrice:2500000,
            productDescription:"Đôi giày Run Star Hike với kiểu dáng Chunky thời thượng cùng phong cách độc đáo, mang lại cho bạn vẻ ngoài thu hút ánh nhìn. Đế giày dày dặn cho bạn thỏa sức hack chiều cao và thêm tự tin xuống phố. Màu trắng tinh tế không kém phần thanh lịch sẽ phối hợp rất tốt với nhiều kiểu outfit hàng ngày. Chất vải Canvas dày dặn với những thớ dệt bền bỉ được gia công tỉ mỉ giúp bạn yên tâm hơn trong mọi hoạt động.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 15,
            productName: 'Giày Converse Chuck 70 Final Club',
            productPrice:2100000,
            productDescription:"Sản phẩm mang tên Converse Chuck 70 Final Club của Converse vừa xuất hiện đã khiến dân tình phải lao xao đứng ngồi không yên. Mang vẻ ngoài gần giống như dòng sản phẩm mang tên Converse x FOG Essentials cùng ra mắt vào mùa hè này, nhưng những đôi giày Converse Chuck 70 Final Club lại mang nhiều yếu tố cao cấp hơn",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 16,
            productName: 'Giày Converse Chuck Taylor All Star Dainty Mule',
            productPrice:1300000,
            productDescription:"Converse Mule với kiểu dáng không gót giày giúp các nàng không tốn quá nhiều thời gian để cởi ra và xỏ vào. Mỗi lần có việc ra khỏi nhà mà các nàng tốn được mớ thời gian dành cho việc mang vớ, xỏ giày rồi buộc dây thì còn gì bằng! ",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 17,
            productName: 'Giày Converse Chuck Taylor All Star High Leather',
            productPrice:1500000,
            productDescription:"Chất liệu da cao cấp mềm mại phủ lấy thân giày giúp đôi chân luôn được dễ chịu, hơn nữa việc vệ sinh cũng trở nên dễ dàng và nhanh chống. Phần cổ giày ôm chân nhưng không gây cảm giác khó chịu khi sử dụng. Bên cạnh đó thiết kế với màu đỏ đô “trầm tính” mới lạ đảm bảo sẽ khiến cho outfit của bạn luôn có được sự nổi bật dù là đi học hay đi chơi cùng bạn bè đều rất phù hợp.",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 18,
            productName: 'Giày Converse Chuck 70 Flame Low',
            productPrice:1900000,
            productDescription:"Chuck 70 Flame được phát triển dựa trên đôi Chuck 70 truyền thống với chất vải dày 340g giúp giữ form giày tốt hơn so với Converse Classic, phần đế ngoài cao 35mm tôn lên vẻ tự tin khi sử dụng. Ngoài ra, phần cao su đế giày Chuck 70 Flame được phủ 1 lớp sơn bóng màu trắng mà mang đậm tính classic - làm nên thương hiệu của dòng Chuck 70",
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 19,
            productName: 'Giày Vans Nam Nữ Old Skool',
            productPrice:1200000,
            productDescription:"Giày Vans nam nữ Old Skool chính hãng len lỏi khắp các con phố từ bình dân đến hoa lệ. Nhờ vào sự kết hợp tinh tế giữa phong cách thiết kế, chất liệu và màu sắc, mẫu giày này nhanh chóng trở thành một  biểu tượng xu hướng nổi tiếng trong giới sneakers ở cả nam lẫn nữ.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 20,
            productName: 'Giày sneakers Vans UA Old Skool 36 DX Anaheim Factory',
            productPrice:2200000,
            productDescription:"Anaheim Factory 36DX Vintage với chất liệu kết hợp giữa Suede và Canvas. Đặc biệt tông màu trắng ngà trendy được nhiều người tìm kiếm với khả năng phối đồ siêu xịn. Đệm lót UltraCush mang đến một cảm nhận khác biệt với dòng giày cao cấp này của nhà Vans",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 21,
            productName: 'Giày sneaker Vans UA Era Deboss Checkerboard',
            productPrice:1700000,
            productDescription:"Chất liệu Textile và Suede được kết hợp ở phần thân giày với phần mũi và gót giày được bố trí họa tiết Checkerboard. Thanh lịch, tinh tế nhưng cũng ko kém phần dễ diện để bạn có thể mix được nhiều phong cách Outfit cho mình.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 22,
            productName: 'Giày sneakers Vans UA Old Skool Packing Tape',
            productPrice:1900000,
            productDescription:"Vans đã ứng dụng họa tiết logo chắp vá đầy cuốn hút, bao phủ lên thân giày, tạo một vẻ ngoài bắt mắt. Thân giày nền đen với công nghệ in màu hiện đại giúp giày không gặp phải tình trạng bạc màu hay lem màu khi sử dụng.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 23,
            productName: 'Giày sneakers Vans UA Slip-On Surf Kide',
            productPrice:1600000,
            productDescription:"Sự kết hợp mới lạ giữa Vans Surf và họa sĩ người Malaysia đã tạo nên một đôi giày mang đậm chất nghệ thuật. Bức tranh sinh hoạt của người dân ngôi làng ven biển vào những năm 1950s đã được khắc họa tinh tế trên đôi giày VANS X KIDE. Với sự trở lại lần này, Vans đã mang đến những đôi giày được cải tiến về chất lượng cả bên trong lẫn bên ngoài.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 24,
            productName: 'Giày sneakers Vans UA Old Skool Los Vans',
            productPrice:2100000,
            productDescription:"Sự kết hợp thú vị giữa những dòng giày Vans cổ điển với thiết kế art print lấy cảm hứng từ game Lotería đã tạo nên một đôi giày vô cùng độc đáo. Những hình ảnh đa sắc màu hội tụ khiến đôi giày thật sự cuốn hút và bắt mắt.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 25,
            productName: 'Giày sneakers Vans UA SK8-Hi Logo Repeat',
            productPrice:2000000,
            productDescription:"Kiểu dáng cổ cao năng động kết hợp song song giữa họa tiết Checkerboard đình đám cùng logo Vans mang ý nghĩa biểu tượng đã góp phần tạo nên điểm nhấn đắt giá nhất cho dòng sản phẩm. Thiết kế đế cao su hình bánh quế bền bỉ tạo độ bám tốt hạn chế tối đa trơn trượt khi di chuyển bất kì địa hình nào.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 26,
            productName: 'Giày sneakers Vans UA Old Skool National Geographic',
            productPrice:2800000,
            productDescription:"Bạn sẽ phải “ngả mũ” trước thiết kế sáng tạo của Vans x National Geographic Photo Ark Old Skool. Ở từng phần hông upper, bạn sẽ lần lượt chứng kiến hình ảnh của 4 loài động vật quý hiếm – hình ảnh trong dự án National Geographic Photo Ark. Được áp dụng công nghệ in tiên tiến của Vans, những họa tiết hình ảnh này trở nên sống động và đầy tính chân thực.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 27,
            productName: 'Giày sneakers Vans UA SK8-Hi Reissue 138 National Geographic ',
            productPrice:3000000,
            productDescription:"Vans x National Geographic Sk8-Hi Reissue 138 là đôi giày khác biệt nhất so với các đôi còn lại trong BST. Phần upper không sử dụng họa tiết hình in, thay vào đó là đường thêu tỉ mỉ, chi tiết phác họa logo và tên của National Geographic. Thiết kế tinh tế, kết hợp cùng chất liệu canvas mềm mịn và đệm lót êm ái chắc chắn sẽ khiến bạn hài lòng!",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 28,
            productName: 'Giày sneakers Vans UA Old Skool 36 DX Anaheim Factory Skulls',
            productPrice:2300000,
            productDescription:"Old Skool 36 DX Anaheim Factory Skulls lột xác với thiết kế họa tiết đầu lâu xương chéo đầy mới lạ, phần đế trắng ngà cổ điển đồng bộ với màu sắc của thân giày tạo điểm nhấn ",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 29,
            productName: 'Giày sneakers Vans UA Classic Slip-On MoMA',
            productPrice:2100000,
            productDescription:"Đôi giày cổ điển của nhà Vans đã được khoác lên chiếc áo mới bằng công nghệ in màu tiên tiến, tái hiện sinh động bức tranh nghệ thuật trừu tượng của những danh họa nổi tiếng trong nền nghệ thuật hiện đại. Với mong muốn truyền cảm hứng để giới trẻ phát huy tính sáng tạo, BST Vans MoMA đã đã được chăm chút tỉ mỉ đến từng chi tiết, mang lại cho bạn một vẻ ngoài cuốn hút và đầy tự tin.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 30,
            productName: 'Giày sneakers Vans x MoMA UA ComfyCush Old Skool',
            productPrice:2500000,
            productDescription:"Sự kết hợp của hãng giày Vans và Viện Bảo tàng Nghệ thuật Hiện đại (MoMA) đã mang đến BST mới với sự đột phá trong thiết kế bên ngoài cũng như kết cấu bên trong. Chất liệu upper làm từ vải textile với họa tiết Checkerboard được biến tấu màu sắc độc đáo. Công nghệ ComfyCush hiện đại giúp giảm thiểu trọng lượng và đem lại cảm giác êm ái, nhẹ nhàng khi mang.",
            idBrand:2,
            idCategory:2,
        },
        {
            idProduct: 31,
            productName: 'Áo Converse Twisted Varsity Pattern Classic',
            productPrice:600000,
            productDescription:"Áo thun Converse với chất liệu cotton mền mịn, bền đẹp, co dãn tốt, thoải mái. Form dáng trẻ trung, năng động cho bạn dễ dàng phối đồ.",
            idBrand:1,
            idCategory:3,
        },
        {
            idProduct: 32,
            productName: 'Áo Converse Twited Varsity Graphic Tee',
            productPrice:650000,
            productDescription:"Áo thun Converse với chất liệu cotton mền mịn, bền đẹp, co dãn tốt, thoải mái. Form dáng trẻ trung, năng động cho bạn dễ dàng phối đồ.",
            idBrand:1,
            idCategory:3,
        },
        {
            idProduct: 33,
            productName: 'Áo Converse Art Os Floral Circle Tee',
            productPrice:600000,
            productDescription:"Áo thun Converse với chất liệu cotton mền mịn, bền đẹp, co dãn tốt, thoải mái. Form dáng trẻ trung, năng động cho bạn dễ dàng phối đồ.",
            idBrand:1,
            idCategory:3,
        },
        {
            idProduct: 34,
            productName: 'Áo Converse Outdoor Collage Short Sleeve Tee',
            productPrice:650000,
            productDescription:"Áo thun Converse với chất liệu cotton mền mịn, bền đẹp, co dãn tốt, thoải mái. Form dáng trẻ trung, năng động cho bạn dễ dàng phối đồ. Điểm nổi bật của chiếc áo chính là logo converse được in ở mặt trước. Giúp bạn không lo bong tróc dù sử dụng một thời gian dài.",
            idBrand:1,
            idCategory:3,
        },
        {
            idProduct: 35,
            productName: 'Áo Converse Graphics SS Seasonal Tee',
            productPrice:850000,
            productDescription:"Thời trang Converse có nhiều đặc điểm chung về kiểu dáng phù hợp cho cả nam và nữ. Cùng nhiều mẫu mã đa dạng thích hợp với nhiều lứa tuổi và có độ bền cao, giá cả hợp lý. Chất liệu Cotton thấm hút và kiểu dáng áo Tee đơn giản. Các họa tiết trên áo được thiết kế dựa trên biểu tượng của Converse và được may tỉ mỉ trên áo bằng những đường chỉ may răng cưa",
            idBrand:1,
            idCategory:3,
        },
        {
            idProduct: 36,
            productName: 'Áo Vans T-Shirts',
            productPrice:850000,
            productDescription:"Các sản phẩm của thương hiệu Vans luôn được đánh giá cao bởi thiết kế đậm chất thể thao, đa dạng kiểu dáng phù hợp với nhiều lứa tuổi. Thời trang Vans có đặc điểm chung là mang kiểu dáng phù hợp cho cả nam và nữ.Cùng nhiều mẫu mã đa dạng thích hợp với nhiều lứa tuổi và có độ bên cao, giá cả hợp lý",
            idBrand:2,
            idCategory:4,
        },
        {
            idProduct: 37,
            productName: 'Áo Vans T-shirt Classic',
            productPrice:700000,
            productDescription:"Thiết kế Unisex cực đơn giản với chất Cotton cao cấp, mềm mại, phù hợp với mọi lứa tuổi.Điểm nổi bật của chiếc áo chính là logo Vans được in ở mặt trước giúp bạn không lo bong tróc dù sử dụng một thời gian dài. Logo Vans đặc trưng bắt mắt Sử dụng chất liệu 100% vải cotton, mềm mại và thoải mái",
            idBrand:2,
            idCategory:4,
        },
        {
            idProduct: 38,
            productName: 'Áo Vans AP Last Gasp SS Tee',
            productPrice:850000,
            productDescription:"Với sắc trắng nhẹ nhàng kết hợp cùng họa tiết đầu lâu cá tính sẽ phù phép nên những bộ outfit hằng ngày trong mới lạ và hút mắt hơn. Mặc khác thiết kế với chất liệu cotton nhẹ thoáng có khả năng thấm hút tốt giúp bạn luôn có được cảm giác thoải mái khi vận động.",
            idBrand:2,
            idCategory:4,
        },
        {
            idProduct: 39,
            productName: 'Áo Vans M Ap Ascended Up SS Tee',
            productPrice:900000,
            productDescription:'Thoải mái và dễ chịu hơn bao giờ hết với chất liệu vải cotton mềm thoáng, gam màu đen cổ điển dễ phối đồ kết hợp cùng họa tiết graphic thần chết ma mị cộng thêm dòng chữ "Vans Of The Wall"được biến tấu cách điệu độc đáo. Các sản phẩm của thương hiệu Vans luôn được đánh giá cao bởi thiết kế đậm chất thể thao, đa dạng kiểu dáng phù hợp với nhiều lứa tuổi.',
            idBrand:2,
            idCategory:4,
        },
        {
            idProduct: 40,
            productName: 'Áo Vans Anaheim Factory OG Skull Long Sleeve T-shirt',
            productPrice:850000,
            productDescription:'Thiết kế áo dài tay Anaheim Factory OG Skull có họa tiết đầu lâu ở ngực trái và tay áo. Chất Cotton cao cấp, mềm mại, phù hợp với mọi lứa tuổi. Form dáng chuẩn, tạo sự thoải mái khi mang. Trẻ trung và năng động.',
            idBrand:2,
            idCategory:4,
        },
    ],
    productdetail: [
        {
            idProduct: 8,
            idImage: 1,
            image: "..//../image/Product/Converse/8.jpg",
        },
        {
            idProduct: 9,
            idImage: 1,
            image: "..//../image/Product/Converse/9.jpg",
        },
        {
            idProduct: 10,
            idImage: 1,
            image: "..//../image/Product/Converse/10.jpg",
        },
        {
            idProduct: 11,
            idImage: 1,
            image: "..//../image/Product/Converse/11.jpg",
        },
        {
            idProduct: 12,
            idImage: 1,
            image: "..//../image/Product/Converse/12.jpg",
        },
        {
            idProduct: 13,
            idImage: 1,
            image: "..//../image/Product/Converse/13.jpg",
        },
        {
            idProduct: 14,
            idImage: 1,
            image: "..//../image/Product/Converse/14.jpg",
        },
        {
            idProduct: 15,
            idImage: 1,
            image: "..//../image/Product/Converse/15.jpg",
        },
        {
            idProduct: 16,
            idImage: 1,
            image: "..//../image/Product/Converse/16.jpg",
        },
        {
            idProduct: 17,
            idImage: 1,
            image: "..//../image/Product/Converse/17.jpg",
        },
        {
            idProduct: 18,
            idImage: 1,
            image: "..//../image/Product/Converse/18.jpg",
        },
        {
            idProduct: 19,
            idImage: 1,
            image: "..//../image/Product/Vans/19.jpg",
        },
        {
            idProduct: 20,
            idImage: 1,
            image: "..//../image/Product/Vans/20.jpg",
        },
        {
            idProduct: 21,
            idImage: 1,
            image: "..//../image/Product/Vans/21.jpg",
        },
        {
            idProduct: 22,
            idImage: 1,
            image: "..//../image/Product/Vans/22.jpg",
        },
        {
            idProduct: 23,
            idImage: 1,
            image: "..//../image/Product/Vans/23.jpg",
        },
        {
            idProduct: 24,
            idImage: 1,
            image: "..//../image/Product/Vans/24.jpg",
        },
        {
            idProduct: 25,
            idImage: 1,
            image: "..//../image/Product/Vans/25.jpg",
        },
        {
            idProduct: 26,
            idImage: 1,
            image: "..//../image/Product/Vans/26.jpg",
        },
        {
            idProduct: 27,
            idImage: 1,
            image: "..//../image/Product/Vans/27.jpg",
        },
        {
            idProduct: 28,
            idImage: 1,
            image: "..//../image/Product/Vans/28.jpg",
        },
        {
            idProduct: 29,
            idImage: 1,
            image: "..//../image/Product/Vans/29.jpg",
        },
        {
            idProduct: 30,
            idImage: 1,
            image: "..//../image/Product/Vans/30.jpg",
        },
        {
            idProduct: 31,
            idImage: 1,
            image: "..//../image/Product/Converse/31.jpg",
        },
        {
            idProduct: 32,
            idImage: 1,
            image: "..//../image/Product/Converse/32.jpg",
        },
        {
            idProduct: 33,
            idImage: 1,
            image: "..//../image/Product/Converse/33.jpg",
        },
        {
            idProduct: 34,
            idImage: 1,
            image: "..//../image/Product/Converse/34.jpg",
        },
        {
            idProduct: 35,
            idImage: 1,
            image: "..//../image/Product/Converse/35.jpg",
        },
        {
            idProduct: 36,
            idImage: 1,
            image: "..//../image/Product/Vans/36.jpg",
        },
        {
            idProduct: 37,
            idImage: 1,
            image: "..//../image/Product/Vans/37.jpg",
        },
        {
            idProduct: 38,
            idImage: 1,
            image: "..//../image/Product/Vans/38.jpg",
        },
        {
            idProduct: 39,
            idImage: 1,
            image: "..//../image/Product/Vans/39.jpg",
        },
        {
            idProduct: 40,
            idImage: 1,
            image: "..//../image/Product/Vans/40.jpg",
        },
    ],
}
 
  
  module.exports = data; 

// var mysql = require('mysql');
// var con = mysql.createConnection({  
//     host: "localhost",  
//     user: "root",  
//     password: "123456",  
//     database: "project_web"  
// });  
// con.connect(function(err) {  
//     if (err) throw err;  
//     console.log("Connected!");  
//     var sql = "INSERT INTO employees (userEmail, userPassword, userFname, userLname, address, phone, isAdmin) VALUES ?";  
 
//     con.query(sql, [data["users"]], function (err, result) {  
//         if (err) throw err;  
//         console.log("Number of records inserted: " + result.affectedRows);  
//     });
// });