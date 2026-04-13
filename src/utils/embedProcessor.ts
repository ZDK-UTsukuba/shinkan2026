/**
 * YouTube、X(Twitter)、Instagramのリンクを埋め込みコンテンツに変換するユーティリティ
 */

// 各プラットフォームのURLパターンを検出する正規表現
const YOUTUBE_LINK_REGEX =
  /<a\s+[^>]*href=(["'])(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?[^"'<>]*|youtu\.be\/[^"'<>]+))\1[^>]*>([^<]+)<\/a>/g;
const TWITTER_REGEX =
  /(?<![\w[\("'])https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/([a-zA-Z0-9_]+)\/status\/([0-9]+)(?![\w\]\)"'])/g;
const INSTAGRAM_REGEX =
  /(?<![\w[\("'])https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel)\/([a-zA-Z0-9_-]+)(?![\w\]\)"'])/g;

/**
 * YouTubeの埋め込みHTMLを生成する
 * @param videoId YouTube動画ID
 * @returns 埋め込みHTML
 */
function createYouTubeEmbed(videoId: string): string {
  return `<div class="embed-container youtube-embed">
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/${videoId}" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>`;
}

/**
 * YouTube URLから動画IDを抽出する
 * @param url YouTube URL
 * @returns 動画ID。抽出できない場合はnull
 */
function extractYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);
      return /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : null;
    }

    if (parsedUrl.hostname === "youtube.com" || parsedUrl.hostname === "www.youtube.com") {
      if (parsedUrl.pathname !== "/watch") {
        return null;
      }

      const videoId = parsedUrl.searchParams.get("v");
      return videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : null;
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * X(Twitter)の埋め込みHTMLを生成する
 * @param username ユーザー名
 * @param tweetId ツイートID
 * @returns 埋め込みHTML
 */
function createTwitterEmbed(username: string, tweetId: string): string {
  return `<div class="embed-container twitter-embed">
    <blockquote class="twitter-tweet" data-dnt="true">
      <a href="https://twitter.com/${username}/status/${tweetId}"></a>
    </blockquote>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>`;
}

/**
 * Instagramの埋め込みHTMLを生成する
 * @param postId 投稿ID
 * @returns 埋め込みHTML
 */
function createInstagramEmbed(postId: string): string {
  return `<div class="embed-container instagram-embed">
    <blockquote 
      class="instagram-media" 
      data-instgrm-permalink="https://www.instagram.com/p/${postId}/" 
      data-instgrm-version="14"
    >
      <a href="https://www.instagram.com/p/${postId}/"></a>
    </blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  </div>`;
}

/**
 * HTMLコンテンツ内のプラットフォームURLを検出し、埋め込みに変換する
 * ラベル付きリンク（[テキスト](URL)形式）は変換しない
 * @param html 処理対象のHTML
 * @returns 埋め込み処理後のHTML
 */
export function processEmbeds(html: string): string {
  // YouTube埋め込み
  html = html.replace(YOUTUBE_LINK_REGEX, (match, _quote, url, label) => {
    const isPlainUrlLabel = label === url || label === url.replaceAll("&", "&amp;");

    if (!isPlainUrlLabel) {
      return match;
    }

    const videoId = extractYouTubeVideoId(url);
    return videoId ? createYouTubeEmbed(videoId) : match;
  });

  // Twitter埋め込み
  html = html.replace(TWITTER_REGEX, (match, username, tweetId) => {
    return createTwitterEmbed(username, tweetId);
  });

  // Instagram埋め込み
  html = html.replace(INSTAGRAM_REGEX, (match, postId) => {
    return createInstagramEmbed(postId);
  });

  return html;
}
