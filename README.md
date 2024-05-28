# LinkedIn Profile Picture Changer

This Chrome extension automatically changes all profile pictures on the LinkedIn homepage to a predefined image. It demonstrates basic DOM manipulation on a popular website using Chrome's extension capabilities.

## Features

- Automatically changes all LinkedIn profile pictures to a specified image.
- Works only on the LinkedIn homepage to ensure minimal impact and specificity.
- Simple and lightweight with no user input required.

## Installation

To install this extension locally for development or testing:

1. **Clone the Repository**
   - Use `git clone https://github.com/yourusername/linkedin-profile-picture-changer.git` to clone this repository to your local machine.
   - Alternatively, you can download the ZIP file and extract it.

2. **Load the Extension into Chrome**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable Developer Mode by toggling the switch at the top right.
   - Click on "Load unpacked" and select the directory where you've cloned or extracted the extension files.

   ![Loading Extension](images/icon_16.png)

## Usage

Once installed, navigate to `https://www.linkedin.com/` to see the extension in action. The profile pictures should automatically change to the new image specified in the extension's content script.

![Before and After](path/to/your/screenshot_before_after.png)

## Files

- `manifest.json`: Contains the setup and configuration of the extension.
- `content.js`: The content script that replaces the profile pictures.
- `background.js`: A simple background script for initialization logging.
- `icon16.png`, `icon48.png`, `icon128.png`: Icons used for the extension in Chrome's toolbar and extension management.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.


