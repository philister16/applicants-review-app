# Applicant Review Application

A web-based tool for reviewing and rating job applicants from CSV files. This standalone HTML application helps evaluators review, rate, and comment on applicants, with all data stored locally in the browser.

## Features

- Upload and parse CSV files containing applicant data
- Review applicant responses to questions
- View self-reported experience levels in various areas
- Rate applicants using a 5-star system
- Add comments for each applicant
- Navigate between applicants with progress tracking
- Export ratings and comments to CSV
- All data stored locally in the browser (no server required)

## Usage

1. Open `applicant-review-app.html` in any modern web browser
2. Enter your name
3. Upload a CSV file with applicant data
4. Review each applicant and provide ratings and comments
5. Export your ratings to CSV when finished

## CSV Format

See `example-applicants.csv` for the expected format. The file should contain applicant details including:

- Unique submission ID
- Text responses to application questions
- Self-rated experience levels in relevant areas

## Privacy

This application runs entirely in your browser. No data is sent to any external servers, and all information is stored locally using browser localStorage.

## License

MIT License

Copyright (c) 2025 Philipp Nueesch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.