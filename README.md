## Ethereum Akıllı Sözleşme Deployment

Bu Node.js uygulaması, Ethereum tabanlı bir blockchain ağına (bu örnekte Matic Mumbai ağına) akıllı sözleşme deploy'u gerçekleştirir. 

### Kullanılan Paketler:

- **ethers.js**: Ethereum uygulamaları geliştirmek için kullanılan bir JavaScript kütüphanesi.
- **dotenv**: .env dosyasından ortam değişkenlerini yükler.
- **fs**: Dosya sistemine erişim sağlar.

### Nasıl Çalışır?

1. Sözleşmenin ABI ve Bytecode bilgilerini dosya sisteminden okur. Bu dosyalar genellikle Solidity derleyicisi tarafından oluşturulur.
2. Etherscan API'den bir Ethereum provider oluşturur. Bu provider, ağla etkileşim için kullanılır.
3. Bir signer oluşturur. Bu signer, özel anahtarınızla işlemleri imzalar.
4. Aktif Ethereum ağından gas fiyatını ve limitini alır.
5. Akıllı sözleşmeyi yüklemek için bir ContractFactory oluşturur.
6. Sözleşmeyi deploy etmeye çalışır ve hata olması durumunda hatayı yazdırır.

### Ortam Değişkenleri (.env):

- **ETHERSCAN_API**: Etherscan API anahtarınız.
- **PRIVATE_KEY**: Ethereum özel anahtarınız.

### Çalıştırmak İçin:


node main.js

